/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary ChipAuthenticationPublicKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChipAuthenticationPublicKeyInfo ::= SEQUENCE {
 *     protocol                    OBJECT IDENTIFIER(id-PK-DH | id-PK-ECDH),
 *     chipAuthenticationPublicKey SubjectPublicKeyInfo,
 *     keyId                       INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChipAuthenticationPublicKeyInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `chipAuthenticationPublicKey`.
         * @public
         * @readonly
         */
        readonly chipAuthenticationPublicKey: SubjectPublicKeyInfo,
        /**
         * @summary `keyId`.
         * @public
         * @readonly
         */
        readonly keyId: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ChipAuthenticationPublicKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ChipAuthenticationPublicKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChipAuthenticationPublicKeyInfo`.
     * @returns {ChipAuthenticationPublicKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (ChipAuthenticationPublicKeyInfo)]: (ChipAuthenticationPublicKeyInfo)[_K] }): ChipAuthenticationPublicKeyInfo {
        return new ChipAuthenticationPublicKeyInfo(_o.protocol, _o.chipAuthenticationPublicKey, _o.keyId);
    }


}

/**
 * @summary The Leading Root Component Types of ChipAuthenticationPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChipAuthenticationPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("chipAuthenticationPublicKey", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("keyId", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ChipAuthenticationPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChipAuthenticationPublicKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChipAuthenticationPublicKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChipAuthenticationPublicKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChipAuthenticationPublicKeyInfo: $.ASN1Decoder<ChipAuthenticationPublicKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChipAuthenticationPublicKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChipAuthenticationPublicKeyInfo (el: _Element): ChipAuthenticationPublicKeyInfo {
    if (!_cached_decoder_for_ChipAuthenticationPublicKeyInfo) { _cached_decoder_for_ChipAuthenticationPublicKeyInfo = function (el: _Element): ChipAuthenticationPublicKeyInfo {
    let protocol!: OBJECT_IDENTIFIER;
    let chipAuthenticationPublicKey!: SubjectPublicKeyInfo;
    let keyId: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "chipAuthenticationPublicKey": (_el: _Element): void => { chipAuthenticationPublicKey = _decode_SubjectPublicKeyInfo(_el); },
        "keyId": (_el: _Element): void => { keyId = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChipAuthenticationPublicKeyInfo,
        _extension_additions_list_spec_for_ChipAuthenticationPublicKeyInfo,
        _root_component_type_list_2_spec_for_ChipAuthenticationPublicKeyInfo,
        undefined,
    );
    return new ChipAuthenticationPublicKeyInfo(
        protocol,
        chipAuthenticationPublicKey,
        keyId
    );
}; }
    return _cached_decoder_for_ChipAuthenticationPublicKeyInfo(el);
}

let _cached_encoder_for_ChipAuthenticationPublicKeyInfo: $.ASN1Encoder<ChipAuthenticationPublicKeyInfo> | null = null;

/**
 * @summary Encodes a(n) ChipAuthenticationPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChipAuthenticationPublicKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ChipAuthenticationPublicKeyInfo (value: ChipAuthenticationPublicKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChipAuthenticationPublicKeyInfo) { _cached_encoder_for_ChipAuthenticationPublicKeyInfo = function (value: ChipAuthenticationPublicKeyInfo, elGetter: $.ASN1Encoder<ChipAuthenticationPublicKeyInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.chipAuthenticationPublicKey, $.BER),
            /* IF_ABSENT  */ ((value.keyId === undefined) ? undefined : $._encodeInteger(value.keyId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChipAuthenticationPublicKeyInfo(value, elGetter);
}


/* eslint-enable */
