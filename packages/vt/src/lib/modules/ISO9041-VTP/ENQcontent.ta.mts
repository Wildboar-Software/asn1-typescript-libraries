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
import { ENQcontent_vteChoice, _decode_ENQcontent_vteChoice, _encode_ENQcontent_vteChoice } from "../ISO9041-VTP/ENQcontent-vteChoice.ta.mjs";
// export { ENQcontent_vteChoice, ENQcontent_vteChoice_draft /* IMPORTED_LONG_NAMED_INTEGER */, draft /* IMPORTED_SHORT_NAMED_INTEGER */, ENQcontent_vteChoice_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, ENQcontent_vteChoice_either /* IMPORTED_LONG_NAMED_INTEGER */, either /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ENQcontent_vteChoice, _encode_ENQcontent_vteChoice } from "../ISO9041-VTP/ENQcontent-vteChoice.ta.mjs";


/**
 * @summary ENQcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENQcontent ::= SEQUENCE {
 *     vteChoice   [0] IMPLICIT INTEGER { draft (0), current (1), either (2) },
 *     failAllowed [1] IMPLICIT BOOLEAN OPTIONAL,
 *     -- TRUE = "yes", FALSE or absent = "no"
 *     retList     [2] IMPLICIT SEQUENCE OF PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ENQcontent {
    constructor (
        /**
         * @summary `vteChoice`.
         * @public
         * @readonly
         */
        readonly vteChoice: ENQcontent_vteChoice,
        /**
         * @summary `failAllowed`.
         * @public
         * @readonly
         */
        readonly failAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `retList`.
         * @public
         * @readonly
         */
        readonly retList: OPTIONAL<PrintableString[]>
    ) {}

    /**
     * @summary Restructures an object into a ENQcontent
     * @description
     * 
     * This takes an `object` and converts it to a `ENQcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ENQcontent`.
     * @returns {ENQcontent}
     */
    public static _from_object (_o: { [_K in keyof (ENQcontent)]: (ENQcontent)[_K] }): ENQcontent {
        return new ENQcontent(_o.vteChoice, _o.failAllowed, _o.retList);
    }


}

/**
 * @summary The Leading Root Component Types of ENQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ENQcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("vteChoice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("failAllowed", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("retList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ENQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ENQcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ENQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ENQcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ENQcontent: $.ASN1Decoder<ENQcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENQcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENQcontent (el: _Element): ENQcontent {
    if (!_cached_decoder_for_ENQcontent) { _cached_decoder_for_ENQcontent = function (el: _Element): ENQcontent {
    let vteChoice!: ENQcontent_vteChoice;
    let failAllowed: OPTIONAL<BOOLEAN>;
    let retList: OPTIONAL<PrintableString[]>;
    const callbacks: $.DecodingMap = {
        "vteChoice": (_el: _Element): void => { vteChoice = $._decode_implicit<ENQcontent_vteChoice>(() => _decode_ENQcontent_vteChoice)(_el); },
        "failAllowed": (_el: _Element): void => { failAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retList": (_el: _Element): void => { retList = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ENQcontent,
        _extension_additions_list_spec_for_ENQcontent,
        _root_component_type_list_2_spec_for_ENQcontent,
        undefined,
    );
    return new ENQcontent(
        vteChoice,
        failAllowed,
        retList
    );
}; }
    return _cached_decoder_for_ENQcontent(el);
}

let _cached_encoder_for_ENQcontent: $.ASN1Encoder<ENQcontent> | null = null;

/**
 * @summary Encodes a(n) ENQcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENQcontent, encoded as an ASN.1 Element.
 */
export
function _encode_ENQcontent (value: ENQcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENQcontent) { _cached_encoder_for_ENQcontent = function (value: ENQcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ENQcontent_vteChoice, $.BER)(value.vteChoice, $.BER),
            /* IF_ABSENT  */ ((value.failAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.failAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.retList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.retList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ENQcontent(value, elGetter);
}


/* eslint-enable */
