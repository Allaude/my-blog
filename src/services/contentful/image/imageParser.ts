import { Asset } from 'contentful'

export type ImageParsed = Asset['fields']['file']
export default function imageParser({ fields }: Asset): ImageParsed {
  return fields.file
}
