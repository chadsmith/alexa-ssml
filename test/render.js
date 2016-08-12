import test from 'ava';
import ssml, { render } from '../src';

test('renders a string from SSML', t => {
  const speech = (
    <speak>
      <s>This is a sentence with a pause <break time="2000ms"/></s>
      <s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s>
    </speak>
  );

  t.is(render(speech), '<speak><s>This is a sentence with a pause <break time="2000ms"/></s><s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s></speak>');
});

test('renders a string from an array of SSML', t => {
  const sentences = [
    <s>This is at the beginning of an array.</s>,
    <s>This is a sentence with a pause <break time="2000ms"/></s>,
    <s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s>
  ];
  const speech = (
    <speak>
      {sentences}
    </speak>
  );

  t.is(render(speech), '<speak><s>This is at the beginning of an array.</s><s>This is a sentence with a pause <break time="2000ms"/></s><s>I would like a <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme></s></speak>');
});
