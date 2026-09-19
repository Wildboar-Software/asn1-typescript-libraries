/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";
// export { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary OtherSignedNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherSignedNotification ::= SEQUENCE {
 *     tbsOtherNotification NotificationMetadata,
 *     euiccNotificationSignature [APPLICATION 55] OCTET STRING,    -- eUICC signature of tbsOtherNotification, Tag '5F37'
 *     euiccCertificate Certificate,     -- eUICC Certificate (CERT.EUICC.ECDSA) signed by the EUM 
 *     eumCertificate Certificate     -- EUM Certificate (CERT.EUM.ECDSA) signed by the requested CI
 * }
 * ```
 * 
 * @class
 */
export
class OtherSignedNotification {
    constructor (
        /**
         * @summary `tbsOtherNotification`.
         * @public
         * @readonly
         */
        readonly tbsOtherNotification: NotificationMetadata,
        /**
         * @summary `euiccNotificationSignature`.
         * @public
         * @readonly
         */
        readonly euiccNotificationSignature: OCTET_STRING,
        /**
         * @summary `euiccCertificate`.
         * @public
         * @readonly
         */
        readonly euiccCertificate: Certificate,
        /**
         * @summary `eumCertificate`.
         * @public
         * @readonly
         */
        readonly eumCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a OtherSignedNotification
     * @description
     * 
     * This takes an `object` and converts it to a `OtherSignedNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherSignedNotification`.
     * @returns {OtherSignedNotification}
     */
    public static _from_object (_o: { [_K in keyof (OtherSignedNotification)]: (OtherSignedNotification)[_K] }): OtherSignedNotification {
        return new OtherSignedNotification(_o.tbsOtherNotification, _o.euiccNotificationSignature, _o.euiccCertificate, _o.eumCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of OtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherSignedNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("tbsOtherNotification", false, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("euiccNotificationSignature", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("euiccCertificate", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("eumCertificate", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of OtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherSignedNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherSignedNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherSignedNotification: $.ASN1Decoder<OtherSignedNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherSignedNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherSignedNotification (el: _Element): OtherSignedNotification {
    if (!_cached_decoder_for_OtherSignedNotification) { _cached_decoder_for_OtherSignedNotification = function (el: _Element): OtherSignedNotification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("OtherSignedNotification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tbsOtherNotification";
    sequence[1].name = "euiccNotificationSignature";
    sequence[2].name = "euiccCertificate";
    sequence[3].name = "eumCertificate";
    let tbsOtherNotification!: NotificationMetadata;
    let euiccNotificationSignature!: OCTET_STRING;
    let euiccCertificate!: Certificate;
    let eumCertificate!: Certificate;
    tbsOtherNotification = _decode_NotificationMetadata(sequence[0]);
    euiccNotificationSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    euiccCertificate = _decode_Certificate(sequence[2]);
    eumCertificate = _decode_Certificate(sequence[3]);
    return new OtherSignedNotification(
        tbsOtherNotification,
        euiccNotificationSignature,
        euiccCertificate,
        eumCertificate,

    );
}; }
    return _cached_decoder_for_OtherSignedNotification(el);
}

let _cached_encoder_for_OtherSignedNotification: $.ASN1Encoder<OtherSignedNotification> | null = null;

/**
 * @summary Encodes a(n) OtherSignedNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherSignedNotification, encoded as an ASN.1 Element.
 */
export
function _encode_OtherSignedNotification (value: OtherSignedNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherSignedNotification) { _cached_encoder_for_OtherSignedNotification = function (value: OtherSignedNotification, elGetter: $.ASN1Encoder<OtherSignedNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NotificationMetadata(value.tbsOtherNotification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccNotificationSignature, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.euiccCertificate, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.eumCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherSignedNotification(value, elGetter);
}


/* eslint-enable */
