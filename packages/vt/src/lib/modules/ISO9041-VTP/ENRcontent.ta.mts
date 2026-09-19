/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { _decode_Result3, _encode_Result3, type Result3 } from "../G/Result3.ta.mjs";
// export { Result3, _decode_Result3, _encode_Result3 } from "../G/Result3.ta.mjs";


/**
 * @summary ENRcontent
 * @description
 *
 * Parameters of VT-END-NEG-RESP. ISO/IEC 9041-1:1997 §6.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENRcontent ::= SEQUENCE {
 *     result      G.Result3,
 *     vteChoice   [3] IMPLICIT BOOLEAN OPTIONAL,
 *     -- TRUE = "draft", FALSE = "current"
 *     retList     [2] IMPLICIT SEQUENCE OF PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ENRcontent {
    constructor (
        /**
         * @summary `result`.
         * @description
         * Result of end-negotiation. ISO/IEC 9041-1:1997 §6.10.
         * @public
         * @readonly
         */
        readonly result: Result3,
        /**
         * @summary `vteChoice`.
         * @description
         * TRUE = draft; FALSE = current. ISO/IEC 9041-1:1997
         * §6.10, §12.1.
         * @public
         * @readonly
         */
        readonly vteChoice: OPTIONAL<BOOLEAN>,
        /**
         * @summary `retList`.
         * @description
         * DO/CO names agreed to be retained. ISO/IEC
         * 9041-1:1997 §6.10.
         * @public
         * @readonly
         */
        readonly retList: OPTIONAL<PrintableString[]>
    ) {}

    /**
     * @summary Restructures an object into a ENRcontent
     * @description
     * 
     * This takes an `object` and converts it to a `ENRcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ENRcontent`.
     * @returns {ENRcontent}
     */
    public static _from_object (_o: { [_K in keyof (ENRcontent)]: (ENRcontent)[_K] }): ENRcontent {
        return new ENRcontent(_o.result, _o.vteChoice, _o.retList);
    }


}

/**
 * @summary The Leading Root Component Types of ENRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ENRcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("result", false, $.hasAnyTag),
    new $.ComponentSpec("vteChoice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("retList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ENRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ENRcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ENRcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ENRcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ENRcontent: $.ASN1Decoder<ENRcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENRcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENRcontent (el: _Element): ENRcontent {
    if (!_cached_decoder_for_ENRcontent) { _cached_decoder_for_ENRcontent = function (el: _Element): ENRcontent {
    let result!: Result3;
    let vteChoice: OPTIONAL<BOOLEAN>;
    let retList: OPTIONAL<PrintableString[]>;
    const callbacks: $.DecodingMap = {
        "result": (_el: _Element): void => { result = _decode_Result3(_el); },
        "vteChoice": (_el: _Element): void => { vteChoice = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retList": (_el: _Element): void => { retList = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ENRcontent,
        _extension_additions_list_spec_for_ENRcontent,
        _root_component_type_list_2_spec_for_ENRcontent,
        undefined,
    );
    return new ENRcontent(
        result,
        vteChoice,
        retList
    );
}; }
    return _cached_decoder_for_ENRcontent(el);
}

let _cached_encoder_for_ENRcontent: $.ASN1Encoder<ENRcontent> | null = null;

/**
 * @summary Encodes a(n) ENRcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENRcontent, encoded as an ASN.1 Element.
 */
export
function _encode_ENRcontent (value: ENRcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENRcontent) { _cached_encoder_for_ENRcontent = function (value: ENRcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Result3(value.result, $.BER),
            /* IF_ABSENT  */ ((value.vteChoice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.vteChoice, $.BER)),
            /* IF_ABSENT  */ ((value.retList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.retList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ENRcontent(value, elGetter);
}


/* eslint-enable */
