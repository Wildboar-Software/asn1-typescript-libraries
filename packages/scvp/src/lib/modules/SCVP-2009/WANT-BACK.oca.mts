/* eslint-disable */
import {
  TYPE_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary WANT_BACK
 * @description
 *
 * Information object class for an SCVP wantBack: alias of
 * `TYPE-IDENTIFIER` binding an OID to the ASN.1 type returned in
 * `ReplyWantBack` ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)) / ([RFC 5055 §3.2.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.3)).
 *
 */
export type WANT_BACK <Type> = TYPE_IDENTIFIER <Type>;

/* eslint-enable */
