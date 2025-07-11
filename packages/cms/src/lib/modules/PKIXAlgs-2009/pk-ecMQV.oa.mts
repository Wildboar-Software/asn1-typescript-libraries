/* eslint-disable */
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import {
    ECParameters,
    _decode_ECParameters,
    _encode_ECParameters,
} from "../PKIXAlgs-2009/ECParameters.ta.mjs";
import {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "../PKIXAlgs-2009/ECPoint.ta.mjs";
import { id_ecMQV } from "../PKIXAlgs-2009/id-ecMQV.va.mjs";

/**
 * @summary pk_ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-ecMQV PUBLIC-KEY ::= {
 * IDENTIFIER id-ecMQV
 * KEY ECPoint
 * PARAMS TYPE ECParameters ARE required
 * -- Private key format not in this module --
 * CERT-KEY-USAGE { keyAgreement, encipherOnly, decipherOnly }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<ECPoint, ECParameters>}
 * @implements {PUBLIC_KEY<ECPoint, ECParameters>}
 */
export const pk_ecMQV: PUBLIC_KEY<ECPoint, ECParameters> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_ECPoint,
        "&Params": _decode_ECParameters,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_ECPoint,
        "&Params": _encode_ECParameters,
        "&PrivateKey": undefined,
    },
    "&id": id_ecMQV /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
