/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";



/**
 * @summary GpLocationInfo_civicLocGml_civicLoc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GpLocationInfo-civicLocGml-civicLoc ::= SEQUENCE {
 *     country [UNIVERSAL 22] IA5String,
 *     a1 [0] IA5String OPTIONAL,
 *     a2 [1] IA5String OPTIONAL,
 *     a3 [2] IA5String OPTIONAL,
 *     a4 [3] IA5String OPTIONAL,
 *     a5 [4] IA5String OPTIONAL,
 *     a6 [5] IA5String OPTIONAL,
 *     prd [6] IA5String OPTIONAL,
 *     pod [7] IA5String OPTIONAL,
 *     sts [8] IA5String OPTIONAL,
 *     hno [9] IA5String OPTIONAL,
 *     hns [10] IA5String OPTIONAL,
 *     lmk [11] IA5String OPTIONAL,
 *     loc [12] IA5String OPTIONAL,
 *     flr [13] IA5String OPTIONAL,
 *     nam [14] IA5String OPTIONAL,
 *     pc [15] IA5String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GpLocationInfo_civicLocGml_civicLoc {
    constructor (
        /**
         * @summary `country`.
         * @public
         * @readonly
         */
        readonly country: IA5String,
        /**
         * @summary `a1`.
         * @public
         * @readonly
         */
        readonly a1: OPTIONAL<IA5String>,
        /**
         * @summary `a2`.
         * @public
         * @readonly
         */
        readonly a2: OPTIONAL<IA5String>,
        /**
         * @summary `a3`.
         * @public
         * @readonly
         */
        readonly a3: OPTIONAL<IA5String>,
        /**
         * @summary `a4`.
         * @public
         * @readonly
         */
        readonly a4: OPTIONAL<IA5String>,
        /**
         * @summary `a5`.
         * @public
         * @readonly
         */
        readonly a5: OPTIONAL<IA5String>,
        /**
         * @summary `a6`.
         * @public
         * @readonly
         */
        readonly a6: OPTIONAL<IA5String>,
        /**
         * @summary `prd`.
         * @public
         * @readonly
         */
        readonly prd: OPTIONAL<IA5String>,
        /**
         * @summary `pod`.
         * @public
         * @readonly
         */
        readonly pod: OPTIONAL<IA5String>,
        /**
         * @summary `sts`.
         * @public
         * @readonly
         */
        readonly sts: OPTIONAL<IA5String>,
        /**
         * @summary `hno`.
         * @public
         * @readonly
         */
        readonly hno: OPTIONAL<IA5String>,
        /**
         * @summary `hns`.
         * @public
         * @readonly
         */
        readonly hns: OPTIONAL<IA5String>,
        /**
         * @summary `lmk`.
         * @public
         * @readonly
         */
        readonly lmk: OPTIONAL<IA5String>,
        /**
         * @summary `loc`.
         * @public
         * @readonly
         */
        readonly loc: OPTIONAL<IA5String>,
        /**
         * @summary `flr`.
         * @public
         * @readonly
         */
        readonly flr: OPTIONAL<IA5String>,
        /**
         * @summary `nam`.
         * @public
         * @readonly
         */
        readonly nam: OPTIONAL<IA5String>,
        /**
         * @summary `pc`.
         * @public
         * @readonly
         */
        readonly pc: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a GpLocationInfo_civicLocGml_civicLoc
     * @description
     * 
     * This takes an `object` and converts it to a `GpLocationInfo_civicLocGml_civicLoc`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GpLocationInfo_civicLocGml_civicLoc`.
     * @returns {GpLocationInfo_civicLocGml_civicLoc}
     */
    public static _from_object (_o: { [_K in keyof (GpLocationInfo_civicLocGml_civicLoc)]: (GpLocationInfo_civicLocGml_civicLoc)[_K] }): GpLocationInfo_civicLocGml_civicLoc {
        return new GpLocationInfo_civicLocGml_civicLoc(_o.country, _o.a1, _o.a2, _o.a3, _o.a4, _o.a5, _o.a6, _o.prd, _o.pod, _o.sts, _o.hno, _o.hns, _o.lmk, _o.loc, _o.flr, _o.nam, _o.pc);
    }


}

/**
 * @summary The Leading Root Component Types of GpLocationInfo_civicLocGml_civicLoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GpLocationInfo_civicLocGml_civicLoc: $.ComponentSpec[] = [
    new $.ComponentSpec("country", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("a1", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("a2", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("a3", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("a4", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("a5", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("a6", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("prd", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pod", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sts", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("hno", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("hns", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("lmk", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("loc", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("flr", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("nam", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("pc", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of GpLocationInfo_civicLocGml_civicLoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GpLocationInfo_civicLocGml_civicLoc: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GpLocationInfo_civicLocGml_civicLoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GpLocationInfo_civicLocGml_civicLoc: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GpLocationInfo_civicLocGml_civicLoc: $.ASN1Decoder<GpLocationInfo_civicLocGml_civicLoc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GpLocationInfo_civicLocGml_civicLoc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GpLocationInfo_civicLocGml_civicLoc (el: _Element): GpLocationInfo_civicLocGml_civicLoc {
    if (!_cached_decoder_for_GpLocationInfo_civicLocGml_civicLoc) { _cached_decoder_for_GpLocationInfo_civicLocGml_civicLoc = function (el: _Element): GpLocationInfo_civicLocGml_civicLoc {
    let country!: IA5String;
    let a1: OPTIONAL<IA5String>;
    let a2: OPTIONAL<IA5String>;
    let a3: OPTIONAL<IA5String>;
    let a4: OPTIONAL<IA5String>;
    let a5: OPTIONAL<IA5String>;
    let a6: OPTIONAL<IA5String>;
    let prd: OPTIONAL<IA5String>;
    let pod: OPTIONAL<IA5String>;
    let sts: OPTIONAL<IA5String>;
    let hno: OPTIONAL<IA5String>;
    let hns: OPTIONAL<IA5String>;
    let lmk: OPTIONAL<IA5String>;
    let loc: OPTIONAL<IA5String>;
    let flr: OPTIONAL<IA5String>;
    let nam: OPTIONAL<IA5String>;
    let pc: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "country": (_el: _Element): void => { country = $._decodeIA5String(_el); },
        "a1": (_el: _Element): void => { a1 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "a2": (_el: _Element): void => { a2 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "a3": (_el: _Element): void => { a3 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "a4": (_el: _Element): void => { a4 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "a5": (_el: _Element): void => { a5 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "a6": (_el: _Element): void => { a6 = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "prd": (_el: _Element): void => { prd = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pod": (_el: _Element): void => { pod = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "sts": (_el: _Element): void => { sts = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "hno": (_el: _Element): void => { hno = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "hns": (_el: _Element): void => { hns = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "lmk": (_el: _Element): void => { lmk = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "loc": (_el: _Element): void => { loc = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "flr": (_el: _Element): void => { flr = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "nam": (_el: _Element): void => { nam = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pc": (_el: _Element): void => { pc = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GpLocationInfo_civicLocGml_civicLoc,
        _extension_additions_list_spec_for_GpLocationInfo_civicLocGml_civicLoc,
        _root_component_type_list_2_spec_for_GpLocationInfo_civicLocGml_civicLoc,
        undefined,
    );
    return new GpLocationInfo_civicLocGml_civicLoc(
        country,
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        prd,
        pod,
        sts,
        hno,
        hns,
        lmk,
        loc,
        flr,
        nam,
        pc
    );
}; }
    return _cached_decoder_for_GpLocationInfo_civicLocGml_civicLoc(el);
}

let _cached_encoder_for_GpLocationInfo_civicLocGml_civicLoc: $.ASN1Encoder<GpLocationInfo_civicLocGml_civicLoc> | null = null;

/**
 * @summary Encodes a(n) GpLocationInfo_civicLocGml_civicLoc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GpLocationInfo_civicLocGml_civicLoc, encoded as an ASN.1 Element.
 */
export
function _encode_GpLocationInfo_civicLocGml_civicLoc (value: GpLocationInfo_civicLocGml_civicLoc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GpLocationInfo_civicLocGml_civicLoc) { _cached_encoder_for_GpLocationInfo_civicLocGml_civicLoc = function (value: GpLocationInfo_civicLocGml_civicLoc, elGetter: $.ASN1Encoder<GpLocationInfo_civicLocGml_civicLoc>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.country, $.BER),
            /* IF_ABSENT  */ ((value.a1 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.a1, $.BER)),
            /* IF_ABSENT  */ ((value.a2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.a2, $.BER)),
            /* IF_ABSENT  */ ((value.a3 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.a3, $.BER)),
            /* IF_ABSENT  */ ((value.a4 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.a4, $.BER)),
            /* IF_ABSENT  */ ((value.a5 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.a5, $.BER)),
            /* IF_ABSENT  */ ((value.a6 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER)(value.a6, $.BER)),
            /* IF_ABSENT  */ ((value.prd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeIA5String, $.BER)(value.prd, $.BER)),
            /* IF_ABSENT  */ ((value.pod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.pod, $.BER)),
            /* IF_ABSENT  */ ((value.sts === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeIA5String, $.BER)(value.sts, $.BER)),
            /* IF_ABSENT  */ ((value.hno === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeIA5String, $.BER)(value.hno, $.BER)),
            /* IF_ABSENT  */ ((value.hns === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeIA5String, $.BER)(value.hns, $.BER)),
            /* IF_ABSENT  */ ((value.lmk === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeIA5String, $.BER)(value.lmk, $.BER)),
            /* IF_ABSENT  */ ((value.loc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeIA5String, $.BER)(value.loc, $.BER)),
            /* IF_ABSENT  */ ((value.flr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeIA5String, $.BER)(value.flr, $.BER)),
            /* IF_ABSENT  */ ((value.nam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeIA5String, $.BER)(value.nam, $.BER)),
            /* IF_ABSENT  */ ((value.pc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeIA5String, $.BER)(value.pc, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GpLocationInfo_civicLocGml_civicLoc(value, elGetter);
}


/* eslint-enable */
