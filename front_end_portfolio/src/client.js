import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "iks2njaq",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skuxeBlZZg0QN0USgaNR8kVXsKB3VWhpdWKTLdPSCSnvqftlGQLnqM55OS6YP1xCiWLXB2QlKzIBu6wK5bb7ls3BlUT1AXdBRjX6pdPImq3s0sjn7qkqeBijAUjvXk2KMUMR7gu7yHFYcnTdZpNSQxuSbyr409f74rf23un4lCSsy5MQUi4W",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
