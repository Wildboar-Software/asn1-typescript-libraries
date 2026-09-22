/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";
// export { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";


/**
 * @summary CompactOtherSignedNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactOtherSignedNotification ::= SEQUENCE {
 *     eidValue [APPLICATION 26] Octet16 OPTIONAL, -- Tag '5A'
 *     tbsOtherNotification NotificationMetadata,
 *     euiccNotificationSignature [APPLICATION 55] OCTET STRING, -- eUICC signature of tbsOtherNotification, Tag '5F37'
 *     euiccCiPKIdentifierToBeUsed OCTET STRING OPTIONAL -- CI Public Key Identifier (possibly truncated) that was used by the eUICC to sign OtherSignedNotification
 * }
 * ```
 * 
 * @class
 */
export
class CompactOtherSignedNotification {
    constructor (
        /**
         * @summary `eidValue`.
         * @public
         * @readonly
         */
        readonly eidValue: OPTIONAL<Octet16>,
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
         * @summary `euiccCiPKIdentifierToBeUsed`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdentifierToBeUsed: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a CompactOtherSignedNotification
     * @description
     * 
     * This takes an `object` and converts it to a `CompactOtherSignedNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactOtherSignedNotification`.
     * @returns {CompactOtherSignedNotification}
     */
    public static _from_object (_o: { [_K in keyof (CompactOtherSignedNotification)]: (CompactOtherSignedNotification)[_K] }): CompactOtherSignedNotification {
        return new CompactOtherSignedNotification(_o.eidValue, _o.tbsOtherNotification, _o.euiccNotificationSignature, _o.euiccCiPKIdentifierToBeUsed);
    }


}

/**
 * @summary The Leading Root Component Types of CompactOtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactOtherSignedNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("eidValue", true, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("tbsOtherNotification", false, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("euiccNotificationSignature", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("euiccCiPKIdentifierToBeUsed", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CompactOtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactOtherSignedNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactOtherSignedNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactOtherSignedNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactOtherSignedNotification: $.ASN1Decoder<CompactOtherSignedNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactOtherSignedNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactOtherSignedNotification (el: _Element): CompactOtherSignedNotification {
    if (!_cached_decoder_for_CompactOtherSignedNotification) { _cached_decoder_for_CompactOtherSignedNotification = function (el: _Element): CompactOtherSignedNotification {
    let eidValue: OPTIONAL<Octet16>;
    let tbsOtherNotification!: NotificationMetadata;
    let euiccNotificationSignature!: OCTET_STRING;
    let euiccCiPKIdentifierToBeUsed: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "eidValue": (_el: _Element): void => { eidValue = $._decode_implicit<Octet16>(() => _decode_Octet16)(_el); },
        "tbsOtherNotification": (_el: _Element): void => { tbsOtherNotification = _decode_NotificationMetadata(_el); },
        "euiccNotificationSignature": (_el: _Element): void => { euiccNotificationSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "euiccCiPKIdentifierToBeUsed": (_el: _Element): void => { euiccCiPKIdentifierToBeUsed = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactOtherSignedNotification,
        _extension_additions_list_spec_for_CompactOtherSignedNotification,
        _root_component_type_list_2_spec_for_CompactOtherSignedNotification,
        undefined,
    );
    return new CompactOtherSignedNotification(
        eidValue,
        tbsOtherNotification,
        euiccNotificationSignature,
        euiccCiPKIdentifierToBeUsed
    );
}; }
    return _cached_decoder_for_CompactOtherSignedNotification(el);
}

let _cached_encoder_for_CompactOtherSignedNotification: $.ASN1Encoder<CompactOtherSignedNotification> | null = null;

/**
 * @summary Encodes a(n) CompactOtherSignedNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactOtherSignedNotification, encoded as an ASN.1 Element.
 */
export
function _encode_CompactOtherSignedNotification (value: CompactOtherSignedNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactOtherSignedNotification) { _cached_encoder_for_CompactOtherSignedNotification = function (value: CompactOtherSignedNotification, elGetter: $.ASN1Encoder<CompactOtherSignedNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eidValue === undefined) ? undefined : $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER)(value.eidValue, $.BER)),
            /* REQUIRED   */ _encode_NotificationMetadata(value.tbsOtherNotification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccNotificationSignature, $.BER),
            /* IF_ABSENT  */ ((value.euiccCiPKIdentifierToBeUsed === undefined) ? undefined : $._encodeOctetString(value.euiccCiPKIdentifierToBeUsed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactOtherSignedNotification(value, elGetter);
}


/* eslint-enable */
