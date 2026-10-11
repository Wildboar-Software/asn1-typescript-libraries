/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Result2, _encode_Result2, type Result2 } from "../G/Result2.ta.mjs";
import { _decode_ProfileArgumValueList, _encode_ProfileArgumValueList, ProfileArgumValueList } from "../G/ProfileArgumValueList.ta.mjs";


/**
 * @summary SPR2content
 * @description
 *
 * VT-SWITCH-PROFILE-RESP with retention list. Same Context
 * Retention FU rules as `SPQ2content`. ISO/IEC 9041-1:1997
 * §6.24, §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SPR2content ::= SEQUENCE {
 *     result  G.Result2,
 *     argList [2] IMPLICIT G.ProfileArgumValueList OPTIONAL,
 *     retList [3] IMPLICIT SEQUENCE OF PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SPR2content {
    constructor (
        /**
         * @summary `result`.
         * @description
         * Result2 success or fail. ISO/IEC 9041-1:1997 §6.24.
         * @public
         * @readonly
         */
        readonly result: Result2,
        /**
         * @summary `argList`.
         * @description
         * Selected profile-argument values. ISO/IEC
         * 9041-1:1997 §6.24.
         * @public
         * @readonly
         */
        readonly argList: OPTIONAL<ProfileArgumValueList>,
        /**
         * @summary `retList`.
         * @description
         * DO/CO names agreed to be retained. ISO/IEC
         * 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly retList: OPTIONAL<PrintableString[]>
    ) {}

    /**
     * @summary Restructures an object into a SPR2content
     * @description
     * 
     * This takes an `object` and converts it to a `SPR2content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPR2content`.
     * @returns {SPR2content}
     */
    public static _from_object (_o: { [_K in keyof (SPR2content)]: (SPR2content)[_K] }): SPR2content {
        return new SPR2content(_o.result, _o.argList, _o.retList);
    }


}

/**
 * @summary The Leading Root Component Types of SPR2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SPR2content: $.ComponentSpec[] = [
    new $.ComponentSpec("result", false, $.hasAnyTag),
    new $.ComponentSpec("argList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("retList", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SPR2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SPR2content: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SPR2content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SPR2content: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SPR2content: $.ASN1Decoder<SPR2content> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPR2content
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SPR2content (el: _Element): SPR2content {
    if (!_cached_decoder_for_SPR2content) { _cached_decoder_for_SPR2content = function (el: _Element): SPR2content {
    let result!: Result2;
    let argList: OPTIONAL<ProfileArgumValueList>;
    let retList: OPTIONAL<PrintableString[]>;
    const callbacks: $.DecodingMap = {
        "result": (_el: _Element): void => { result = _decode_Result2(_el); },
        "argList": (_el: _Element): void => { argList = $._decode_implicit<ProfileArgumValueList>(() => _decode_ProfileArgumValueList)(_el); },
        "retList": (_el: _Element): void => { retList = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SPR2content,
        _extension_additions_list_spec_for_SPR2content,
        _root_component_type_list_2_spec_for_SPR2content,
        undefined,
    );
    return new SPR2content(
        result,
        argList,
        retList
    );
}; }
    return _cached_decoder_for_SPR2content(el);
}

let _cached_encoder_for_SPR2content: $.ASN1Encoder<SPR2content> | null = null;

/**
 * @summary Encodes a(n) SPR2content into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPR2content, encoded as an ASN.1 Element.
 */
export
function _encode_SPR2content (value: SPR2content, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SPR2content) { _cached_encoder_for_SPR2content = function (value: SPR2content): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Result2(value.result, $.BER),
            /* IF_ABSENT  */ ((value.argList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ProfileArgumValueList, $.BER)(value.argList, $.BER)),
            /* IF_ABSENT  */ ((value.retList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.retList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SPR2content(value, elGetter);
}


/* eslint-enable */
