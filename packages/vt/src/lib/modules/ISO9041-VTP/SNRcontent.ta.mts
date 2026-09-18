/* eslint-disable */
import {
    OPTIONAL,
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
// export { Result2, _decode_Result2, _encode_Result2 } from "../G/Result2.ta.mjs";
import { _decode_ProfileArgumValueList, _encode_ProfileArgumValueList, ProfileArgumValueList } from "../G/ProfileArgumValueList.ta.mjs";
// export { ProfileArgumValueList, _decode_ProfileArgumValueList, _encode_ProfileArgumValueList } from "../G/ProfileArgumValueList.ta.mjs";


/**
 * @summary SNRcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SNRcontent ::= SEQUENCE {
 *     result          G.Result2,
 *     argValuesList   [2] IMPLICIT G.ProfileArgumValueList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SNRcontent {
    constructor (
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Result2,
        /**
         * @summary `argValuesList`.
         * @public
         * @readonly
         */
        readonly argValuesList: OPTIONAL<ProfileArgumValueList>
    ) {}

    /**
     * @summary Restructures an object into a SNRcontent
     * @description
     * 
     * This takes an `object` and converts it to a `SNRcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SNRcontent`.
     * @returns {SNRcontent}
     */
    public static _from_object (_o: { [_K in keyof (SNRcontent)]: (SNRcontent)[_K] }): SNRcontent {
        return new SNRcontent(_o.result, _o.argValuesList);
    }


}

/**
 * @summary The Leading Root Component Types of SNRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SNRcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("result", false, $.hasAnyTag),
    new $.ComponentSpec("argValuesList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SNRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SNRcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SNRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SNRcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SNRcontent: $.ASN1Decoder<SNRcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SNRcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SNRcontent (el: _Element): SNRcontent {
    if (!_cached_decoder_for_SNRcontent) { _cached_decoder_for_SNRcontent = function (el: _Element): SNRcontent {
    let result!: Result2;
    let argValuesList: OPTIONAL<ProfileArgumValueList>;
    const callbacks: $.DecodingMap = {
        "result": (_el: _Element): void => { result = _decode_Result2(_el); },
        "argValuesList": (_el: _Element): void => { argValuesList = $._decode_implicit<ProfileArgumValueList>(() => _decode_ProfileArgumValueList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SNRcontent,
        _extension_additions_list_spec_for_SNRcontent,
        _root_component_type_list_2_spec_for_SNRcontent,
        undefined,
    );
    return new SNRcontent(
        result,
        argValuesList
    );
}; }
    return _cached_decoder_for_SNRcontent(el);
}

let _cached_encoder_for_SNRcontent: $.ASN1Encoder<SNRcontent> | null = null;

/**
 * @summary Encodes a(n) SNRcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNRcontent, encoded as an ASN.1 Element.
 */
export
function _encode_SNRcontent (value: SNRcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SNRcontent) { _cached_encoder_for_SNRcontent = function (value: SNRcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Result2(value.result, $.BER),
            /* IF_ABSENT  */ ((value.argValuesList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ProfileArgumValueList, $.BER)(value.argValuesList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SNRcontent(value, elGetter);
}


/* eslint-enable */
