/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/**
 * @summary ASN1SharedInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1SharedInfo ::= SEQUENCE {
 *     keyInfo AlgorithmIdentifier,
 *     entityUInfo [0] OCTET STRING OPTIONAL,
 *     entityVInfo [1] OCTET STRING OPTIONAL,
 *     suppPubInfo [2] OCTET STRING OPTIONAL,
 *     suppPrivInfo [3] OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class ASN1SharedInfo {
    constructor (
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: AlgorithmIdentifier,
        /**
         * @summary `entityUInfo`.
         * @public
         * @readonly
         */
        readonly entityUInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `entityVInfo`.
         * @public
         * @readonly
         */
        readonly entityVInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `suppPubInfo`.
         * @public
         * @readonly
         */
        readonly suppPubInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `suppPrivInfo`.
         * @public
         * @readonly
         */
        readonly suppPrivInfo: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ASN1SharedInfo
     * @description
     *
     * This takes an `object` and converts it to a `ASN1SharedInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASN1SharedInfo`.
     * @returns {ASN1SharedInfo}
     */
    public static _from_object (_o: { [_K in keyof (ASN1SharedInfo)]: (ASN1SharedInfo)[_K] }): ASN1SharedInfo {
        return new ASN1SharedInfo(_o.keyInfo, _o.entityUInfo, _o.entityVInfo, _o.suppPubInfo, _o.suppPrivInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ASN1SharedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASN1SharedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("keyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("entityUInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entityVInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("suppPubInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("suppPrivInfo", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ASN1SharedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASN1SharedInfo: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ASN1SharedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ASN1SharedInfo: $.ComponentSpec[] = [

];

let _cached_decoder_for_ASN1SharedInfo: $.ASN1Decoder<ASN1SharedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASN1SharedInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASN1SharedInfo} The decoded data structure.
 */
export
function _decode_ASN1SharedInfo (el: _Element) {
    if (!_cached_decoder_for_ASN1SharedInfo) { _cached_decoder_for_ASN1SharedInfo = function (el: _Element): ASN1SharedInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyInfo!: AlgorithmIdentifier;
    let entityUInfo: OPTIONAL<OCTET_STRING>;
    let entityVInfo: OPTIONAL<OCTET_STRING>;
    let suppPubInfo: OPTIONAL<OCTET_STRING>;
    let suppPrivInfo: OPTIONAL<OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "keyInfo": (_el: _Element): void => { keyInfo = _decode_AlgorithmIdentifier(_el); },
        "entityUInfo": (_el: _Element): void => { entityUInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "entityVInfo": (_el: _Element): void => { entityVInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "suppPubInfo": (_el: _Element): void => { suppPubInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "suppPrivInfo": (_el: _Element): void => { suppPrivInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ASN1SharedInfo,
        _extension_additions_list_spec_for_ASN1SharedInfo,
        _root_component_type_list_2_spec_for_ASN1SharedInfo,
        undefined,
    );
    return new ASN1SharedInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyInfo,
        entityUInfo,
        entityVInfo,
        suppPubInfo,
        suppPrivInfo
    );
}; }
    return _cached_decoder_for_ASN1SharedInfo(el);
}

let _cached_encoder_for_ASN1SharedInfo: $.ASN1Encoder<ASN1SharedInfo> | null = null;

/**
 * @summary Encodes a(n) ASN1SharedInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASN1SharedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ASN1SharedInfo (value: ASN1SharedInfo, elGetter: $.ASN1Encoder<ASN1SharedInfo>) {
    if (!_cached_encoder_for_ASN1SharedInfo) { _cached_encoder_for_ASN1SharedInfo = function (value: ASN1SharedInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.keyInfo, $.DER),
            /* IF_ABSENT  */ ((value.entityUInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.DER)(value.entityUInfo, $.DER)),
            /* IF_ABSENT  */ ((value.entityVInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.DER)(value.entityVInfo, $.DER)),
            /* IF_ABSENT  */ ((value.suppPubInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.DER)(value.suppPubInfo, $.DER)),
            /* IF_ABSENT  */ ((value.suppPrivInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.DER)(value.suppPrivInfo, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ASN1SharedInfo(value, elGetter);
}


/* eslint-enable */
