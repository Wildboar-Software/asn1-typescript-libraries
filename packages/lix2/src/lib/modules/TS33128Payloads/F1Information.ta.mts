/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
// export { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";


/**
 * @summary F1Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * F1Information ::= SEQUENCE
 * {
 *     gNBDUID            [1] INTEGER (0..68719476735),
 *     gNBDUName          [2] UTF8String OPTIONAL,
 *     gNBCUName          [3] UTF8String OPTIONAL,
 *     gNBDUServedCells   [4] SEQUENCE (SIZE(1..MAX)) OF RANCGI,
 *     extendedGNBDUName  [5] UTF8String OPTIONAL,
 *     extendedGNBCUName  [6] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class F1Information {
    constructor (
        /**
         * @summary `gNBDUID`.
         * @public
         * @readonly
         */
        readonly gNBDUID: INTEGER,
        /**
         * @summary `gNBDUName`.
         * @public
         * @readonly
         */
        readonly gNBDUName: OPTIONAL<UTF8String>,
        /**
         * @summary `gNBCUName`.
         * @public
         * @readonly
         */
        readonly gNBCUName: OPTIONAL<UTF8String>,
        /**
         * @summary `gNBDUServedCells`.
         * @public
         * @readonly
         */
        readonly gNBDUServedCells: RANCGI[],
        /**
         * @summary `extendedGNBDUName`.
         * @public
         * @readonly
         */
        readonly extendedGNBDUName: OPTIONAL<UTF8String>,
        /**
         * @summary `extendedGNBCUName`.
         * @public
         * @readonly
         */
        readonly extendedGNBCUName: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a F1Information
     * @description
     * 
     * This takes an `object` and converts it to a `F1Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `F1Information`.
     * @returns {F1Information}
     */
    public static _from_object (_o: { [_K in keyof (F1Information)]: (F1Information)[_K] }): F1Information {
        return new F1Information(_o.gNBDUID, _o.gNBDUName, _o.gNBCUName, _o.gNBDUServedCells, _o.extendedGNBDUName, _o.extendedGNBCUName);
    }


}

/**
 * @summary The Leading Root Component Types of F1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_F1Information: $.ComponentSpec[] = [
    new $.ComponentSpec("gNBDUID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gNBDUName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gNBCUName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gNBDUServedCells", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extendedGNBDUName", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extendedGNBCUName", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of F1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_F1Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of F1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_F1Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_F1Information: $.ASN1Decoder<F1Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) F1Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_F1Information (el: _Element): F1Information {
    if (!_cached_decoder_for_F1Information) { _cached_decoder_for_F1Information = function (el: _Element): F1Information {
    let gNBDUID!: INTEGER;
    let gNBDUName: OPTIONAL<UTF8String>;
    let gNBCUName: OPTIONAL<UTF8String>;
    let gNBDUServedCells!: RANCGI[];
    let extendedGNBDUName: OPTIONAL<UTF8String>;
    let extendedGNBCUName: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "gNBDUID": (_el: _Element): void => { gNBDUID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "gNBDUName": (_el: _Element): void => { gNBDUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gNBCUName": (_el: _Element): void => { gNBCUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gNBDUServedCells": (_el: _Element): void => { gNBDUServedCells = $._decode_implicit<RANCGI[]>(() => $._decodeSequenceOf<RANCGI>(() => _decode_RANCGI))(_el); },
        "extendedGNBDUName": (_el: _Element): void => { extendedGNBDUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "extendedGNBCUName": (_el: _Element): void => { extendedGNBCUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_F1Information,
        _extension_additions_list_spec_for_F1Information,
        _root_component_type_list_2_spec_for_F1Information,
        undefined,
    );
    return new F1Information(
        gNBDUID,
        gNBDUName,
        gNBCUName,
        gNBDUServedCells,
        extendedGNBDUName,
        extendedGNBCUName
    );
}; }
    return _cached_decoder_for_F1Information(el);
}

let _cached_encoder_for_F1Information: $.ASN1Encoder<F1Information> | null = null;

/**
 * @summary Encodes a(n) F1Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F1Information, encoded as an ASN.1 Element.
 */
export
function _encode_F1Information (value: F1Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_F1Information) { _cached_encoder_for_F1Information = function (value: F1Information, elGetter: $.ASN1Encoder<F1Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.gNBDUID, $.BER),
            /* IF_ABSENT  */ ((value.gNBDUName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.gNBDUName, $.BER)),
            /* IF_ABSENT  */ ((value.gNBCUName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.gNBCUName, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<RANCGI>(() => _encode_RANCGI, $.BER), $.BER)(value.gNBDUServedCells, $.BER),
            /* IF_ABSENT  */ ((value.extendedGNBDUName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.extendedGNBDUName, $.BER)),
            /* IF_ABSENT  */ ((value.extendedGNBCUName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.extendedGNBCUName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_F1Information(value, elGetter);
}


/* eslint-enable */
