/* eslint-disable */
import {
  NULL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary MasterDeletionEvent_NotificationParams
 * @description
 *
 * Parameter of a `masterDeletionEvent` notification BIP message
 * (`BIPNotification`, slave → remaining masters). Always `NULL`.
 * Sent when the slave processes `BioAPI_Terminate` (X.1083
 * §16.3.3.2). The receiving master deletes the slave's row from
 * `VisibleEndpoints` and shall not send an acknowledgement
 * (X.1083 §16.3.4). ITU-T Rec. X.1083 (11/2007)
 * [§16.3.2](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterDeletionEvent-NotificationParams  ::=  NULL
 * ```
 */
export type MasterDeletionEvent_NotificationParams = NULL; // NullType




export const _decode_MasterDeletionEvent_NotificationParams = $._decodeNull;




export const _encode_MasterDeletionEvent_NotificationParams = $._encodeNull;


/* eslint-enable */
