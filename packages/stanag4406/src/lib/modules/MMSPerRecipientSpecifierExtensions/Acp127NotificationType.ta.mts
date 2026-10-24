/* eslint-disable */
import {
    type ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127NotificationType
 * @description
 * 
 * Which ACP 127 gateway notifications the originator wants for one recipient,
 * or which kind a gateway is reporting. Any combination of the three bits may
 * be set. A receiving MM-UA may ignore the request. The conditions under which
 * a gateway generates each notification are in Annex D. STANAG 4406 (Ed. 2),
 * Annex A, A2.1, clause 8.4, B.118, and B.119.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127NotificationType  ::=  BIT STRING {
 *   acp127-nn(0), -- negative notification
 *   acp127-pn(1), -- positive notification
 *   acp127-tn(2)}
 * ```
 */
export
type Acp127NotificationType = BIT_STRING;

/**
 * @summary Acp127NotificationType_acp127_nn
 * @description
 *
 * Negative notification (bit 0). The ACP 127 gateway received the message but
 * failed to transfer it, and does not take communications responsibility.
 * STANAG 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const Acp127NotificationType_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acp127_nn
 * @description
 *
 * Negative notification (bit 0). The ACP 127 gateway received the message but
 * failed to transfer it, and does not take communications responsibility.
 * STANAG 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const acp127_nn: number = Acp127NotificationType_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_pn
 * @description
 *
 * Positive notification (bit 1). The gateway translated the message into ACP
 * 127 and takes communications responsibility for trace and recovery. STANAG
 * 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const Acp127NotificationType_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acp127_pn
 * @description
 *
 * Positive notification (bit 1). The gateway translated the message into ACP
 * 127 and takes communications responsibility for trace and recovery. STANAG
 * 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const acp127_pn: number = Acp127NotificationType_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_tn
 * @description
 *
 * Transfer notification (bit 2). The gateway translated the message but does
 * not keep a record and does not take communications responsibility. STANAG
 * 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const Acp127NotificationType_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary acp127_tn
 * @description
 *
 * Transfer notification (bit 2). The gateway translated the message but does
 * not keep a record and does not take communications responsibility. STANAG
 * 4406 (Ed. 2), Annex A, A2.1, clause 8.4, and B.118.
 * @constant
 */
export
const acp127_tn: number = Acp127NotificationType_acp127_tn; /* SHORT_NAMED_BIT */
export const _decode_Acp127NotificationType: $.ASN1Decoder<Acp127NotificationType> = $._decodeBitString;
export const _encode_Acp127NotificationType: $.ASN1Encoder<Acp127NotificationType> = $._encodeBitString;


/* eslint-enable */
