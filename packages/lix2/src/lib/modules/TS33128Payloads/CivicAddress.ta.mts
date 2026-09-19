/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CivicAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddress ::= SEQUENCE
 * {
 *     country                             [1] UTF8String,
 *     a1                                  [2] UTF8String OPTIONAL,
 *     a2                                  [3] UTF8String OPTIONAL,
 *     a3                                  [4] UTF8String OPTIONAL,
 *     a4                                  [5] UTF8String OPTIONAL,
 *     a5                                  [6] UTF8String OPTIONAL,
 *     a6                                  [7] UTF8String OPTIONAL,
 *     prd                                 [8] UTF8String OPTIONAL,
 *     pod                                 [9] UTF8String OPTIONAL,
 *     sts                                 [10] UTF8String OPTIONAL,
 *     hno                                 [11] UTF8String OPTIONAL,
 *     hns                                 [12] UTF8String OPTIONAL,
 *     lmk                                 [13] UTF8String OPTIONAL,
 *     loc                                 [14] UTF8String OPTIONAL,
 *     nam                                 [15] UTF8String OPTIONAL,
 *     pc                                  [16] UTF8String OPTIONAL,
 *     bld                                 [17] UTF8String OPTIONAL,
 *     unit                                [18] UTF8String OPTIONAL,
 *     flr                                 [19] UTF8String OPTIONAL,
 *     room                                [20] UTF8String OPTIONAL,
 *     plc                                 [21] UTF8String OPTIONAL,
 *     pcn                                 [22] UTF8String OPTIONAL,
 *     pobox                               [23] UTF8String OPTIONAL,
 *     addcode                             [24] UTF8String OPTIONAL,
 *     seat                                [25] UTF8String OPTIONAL,
 *     rd                                  [26] UTF8String OPTIONAL,
 *     rdsec                               [27] UTF8String OPTIONAL,
 *     rdbr                                [28] UTF8String OPTIONAL,
 *     rdsubbr                             [29] UTF8String OPTIONAL,
 *     prm                                 [30] UTF8String OPTIONAL,
 *     pom                                 [31] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CivicAddress {
    constructor (
        /**
         * @summary `country`.
         * @public
         * @readonly
         */
        readonly country: UTF8String,
        /**
         * @summary `a1`.
         * @public
         * @readonly
         */
        readonly a1: OPTIONAL<UTF8String>,
        /**
         * @summary `a2`.
         * @public
         * @readonly
         */
        readonly a2: OPTIONAL<UTF8String>,
        /**
         * @summary `a3`.
         * @public
         * @readonly
         */
        readonly a3: OPTIONAL<UTF8String>,
        /**
         * @summary `a4`.
         * @public
         * @readonly
         */
        readonly a4: OPTIONAL<UTF8String>,
        /**
         * @summary `a5`.
         * @public
         * @readonly
         */
        readonly a5: OPTIONAL<UTF8String>,
        /**
         * @summary `a6`.
         * @public
         * @readonly
         */
        readonly a6: OPTIONAL<UTF8String>,
        /**
         * @summary `prd`.
         * @public
         * @readonly
         */
        readonly prd: OPTIONAL<UTF8String>,
        /**
         * @summary `pod`.
         * @public
         * @readonly
         */
        readonly pod: OPTIONAL<UTF8String>,
        /**
         * @summary `sts`.
         * @public
         * @readonly
         */
        readonly sts: OPTIONAL<UTF8String>,
        /**
         * @summary `hno`.
         * @public
         * @readonly
         */
        readonly hno: OPTIONAL<UTF8String>,
        /**
         * @summary `hns`.
         * @public
         * @readonly
         */
        readonly hns: OPTIONAL<UTF8String>,
        /**
         * @summary `lmk`.
         * @public
         * @readonly
         */
        readonly lmk: OPTIONAL<UTF8String>,
        /**
         * @summary `loc`.
         * @public
         * @readonly
         */
        readonly loc: OPTIONAL<UTF8String>,
        /**
         * @summary `nam`.
         * @public
         * @readonly
         */
        readonly nam: OPTIONAL<UTF8String>,
        /**
         * @summary `pc`.
         * @public
         * @readonly
         */
        readonly pc: OPTIONAL<UTF8String>,
        /**
         * @summary `bld`.
         * @public
         * @readonly
         */
        readonly bld: OPTIONAL<UTF8String>,
        /**
         * @summary `unit`.
         * @public
         * @readonly
         */
        readonly unit: OPTIONAL<UTF8String>,
        /**
         * @summary `flr`.
         * @public
         * @readonly
         */
        readonly flr: OPTIONAL<UTF8String>,
        /**
         * @summary `room`.
         * @public
         * @readonly
         */
        readonly room: OPTIONAL<UTF8String>,
        /**
         * @summary `plc`.
         * @public
         * @readonly
         */
        readonly plc: OPTIONAL<UTF8String>,
        /**
         * @summary `pcn`.
         * @public
         * @readonly
         */
        readonly pcn: OPTIONAL<UTF8String>,
        /**
         * @summary `pobox`.
         * @public
         * @readonly
         */
        readonly pobox: OPTIONAL<UTF8String>,
        /**
         * @summary `addcode`.
         * @public
         * @readonly
         */
        readonly addcode: OPTIONAL<UTF8String>,
        /**
         * @summary `seat`.
         * @public
         * @readonly
         */
        readonly seat: OPTIONAL<UTF8String>,
        /**
         * @summary `rd`.
         * @public
         * @readonly
         */
        readonly rd: OPTIONAL<UTF8String>,
        /**
         * @summary `rdsec`.
         * @public
         * @readonly
         */
        readonly rdsec: OPTIONAL<UTF8String>,
        /**
         * @summary `rdbr`.
         * @public
         * @readonly
         */
        readonly rdbr: OPTIONAL<UTF8String>,
        /**
         * @summary `rdsubbr`.
         * @public
         * @readonly
         */
        readonly rdsubbr: OPTIONAL<UTF8String>,
        /**
         * @summary `prm`.
         * @public
         * @readonly
         */
        readonly prm: OPTIONAL<UTF8String>,
        /**
         * @summary `pom`.
         * @public
         * @readonly
         */
        readonly pom: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a CivicAddress
     * @description
     * 
     * This takes an `object` and converts it to a `CivicAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CivicAddress`.
     * @returns {CivicAddress}
     */
    public static _from_object (_o: { [_K in keyof (CivicAddress)]: (CivicAddress)[_K] }): CivicAddress {
        return new CivicAddress(_o.country, _o.a1, _o.a2, _o.a3, _o.a4, _o.a5, _o.a6, _o.prd, _o.pod, _o.sts, _o.hno, _o.hns, _o.lmk, _o.loc, _o.nam, _o.pc, _o.bld, _o.unit, _o.flr, _o.room, _o.plc, _o.pcn, _o.pobox, _o.addcode, _o.seat, _o.rd, _o.rdsec, _o.rdbr, _o.rdsubbr, _o.prm, _o.pom);
    }


}

/**
 * @summary The Leading Root Component Types of CivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CivicAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("country", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("a1", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("a2", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("a3", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("a4", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("a5", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("a6", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("prd", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pod", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sts", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("hno", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("hns", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("lmk", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("loc", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("nam", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("pc", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("bld", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("unit", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("flr", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("room", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("plc", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("pcn", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("pobox", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("addcode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("seat", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("rd", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("rdsec", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("rdbr", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("rdsubbr", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("prm", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("pom", true, $.hasTag(_TagClass.context, 31))
];

/**
 * @summary The Trailing Root Component Types of CivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CivicAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CivicAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CivicAddress: $.ASN1Decoder<CivicAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CivicAddress (el: _Element): CivicAddress {
    if (!_cached_decoder_for_CivicAddress) { _cached_decoder_for_CivicAddress = function (el: _Element): CivicAddress {
    let country!: UTF8String;
    let a1: OPTIONAL<UTF8String>;
    let a2: OPTIONAL<UTF8String>;
    let a3: OPTIONAL<UTF8String>;
    let a4: OPTIONAL<UTF8String>;
    let a5: OPTIONAL<UTF8String>;
    let a6: OPTIONAL<UTF8String>;
    let prd: OPTIONAL<UTF8String>;
    let pod: OPTIONAL<UTF8String>;
    let sts: OPTIONAL<UTF8String>;
    let hno: OPTIONAL<UTF8String>;
    let hns: OPTIONAL<UTF8String>;
    let lmk: OPTIONAL<UTF8String>;
    let loc: OPTIONAL<UTF8String>;
    let nam: OPTIONAL<UTF8String>;
    let pc: OPTIONAL<UTF8String>;
    let bld: OPTIONAL<UTF8String>;
    let unit: OPTIONAL<UTF8String>;
    let flr: OPTIONAL<UTF8String>;
    let room: OPTIONAL<UTF8String>;
    let plc: OPTIONAL<UTF8String>;
    let pcn: OPTIONAL<UTF8String>;
    let pobox: OPTIONAL<UTF8String>;
    let addcode: OPTIONAL<UTF8String>;
    let seat: OPTIONAL<UTF8String>;
    let rd: OPTIONAL<UTF8String>;
    let rdsec: OPTIONAL<UTF8String>;
    let rdbr: OPTIONAL<UTF8String>;
    let rdsubbr: OPTIONAL<UTF8String>;
    let prm: OPTIONAL<UTF8String>;
    let pom: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "country": (_el: _Element): void => { country = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a1": (_el: _Element): void => { a1 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a2": (_el: _Element): void => { a2 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a3": (_el: _Element): void => { a3 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a4": (_el: _Element): void => { a4 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a5": (_el: _Element): void => { a5 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "a6": (_el: _Element): void => { a6 = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "prd": (_el: _Element): void => { prd = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pod": (_el: _Element): void => { pod = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "sts": (_el: _Element): void => { sts = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "hno": (_el: _Element): void => { hno = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "hns": (_el: _Element): void => { hns = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "lmk": (_el: _Element): void => { lmk = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "loc": (_el: _Element): void => { loc = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nam": (_el: _Element): void => { nam = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pc": (_el: _Element): void => { pc = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "bld": (_el: _Element): void => { bld = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "unit": (_el: _Element): void => { unit = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "flr": (_el: _Element): void => { flr = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "room": (_el: _Element): void => { room = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "plc": (_el: _Element): void => { plc = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pcn": (_el: _Element): void => { pcn = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pobox": (_el: _Element): void => { pobox = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "addcode": (_el: _Element): void => { addcode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "seat": (_el: _Element): void => { seat = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rd": (_el: _Element): void => { rd = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rdsec": (_el: _Element): void => { rdsec = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rdbr": (_el: _Element): void => { rdbr = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "rdsubbr": (_el: _Element): void => { rdsubbr = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "prm": (_el: _Element): void => { prm = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pom": (_el: _Element): void => { pom = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CivicAddress,
        _extension_additions_list_spec_for_CivicAddress,
        _root_component_type_list_2_spec_for_CivicAddress,
        undefined,
    );
    return new CivicAddress(
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
        nam,
        pc,
        bld,
        unit,
        flr,
        room,
        plc,
        pcn,
        pobox,
        addcode,
        seat,
        rd,
        rdsec,
        rdbr,
        rdsubbr,
        prm,
        pom
    );
}; }
    return _cached_decoder_for_CivicAddress(el);
}

let _cached_encoder_for_CivicAddress: $.ASN1Encoder<CivicAddress> | null = null;

/**
 * @summary Encodes a(n) CivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CivicAddress, encoded as an ASN.1 Element.
 */
export
function _encode_CivicAddress (value: CivicAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CivicAddress) { _cached_encoder_for_CivicAddress = function (value: CivicAddress, elGetter: $.ASN1Encoder<CivicAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.country, $.BER),
            /* IF_ABSENT  */ ((value.a1 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.a1, $.BER)),
            /* IF_ABSENT  */ ((value.a2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.a2, $.BER)),
            /* IF_ABSENT  */ ((value.a3 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.a3, $.BER)),
            /* IF_ABSENT  */ ((value.a4 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.a4, $.BER)),
            /* IF_ABSENT  */ ((value.a5 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.a5, $.BER)),
            /* IF_ABSENT  */ ((value.a6 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.a6, $.BER)),
            /* IF_ABSENT  */ ((value.prd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.prd, $.BER)),
            /* IF_ABSENT  */ ((value.pod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.pod, $.BER)),
            /* IF_ABSENT  */ ((value.sts === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.sts, $.BER)),
            /* IF_ABSENT  */ ((value.hno === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.hno, $.BER)),
            /* IF_ABSENT  */ ((value.hns === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.hns, $.BER)),
            /* IF_ABSENT  */ ((value.lmk === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER)(value.lmk, $.BER)),
            /* IF_ABSENT  */ ((value.loc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.loc, $.BER)),
            /* IF_ABSENT  */ ((value.nam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.nam, $.BER)),
            /* IF_ABSENT  */ ((value.pc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.pc, $.BER)),
            /* IF_ABSENT  */ ((value.bld === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.bld, $.BER)),
            /* IF_ABSENT  */ ((value.unit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.unit, $.BER)),
            /* IF_ABSENT  */ ((value.flr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.flr, $.BER)),
            /* IF_ABSENT  */ ((value.room === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.room, $.BER)),
            /* IF_ABSENT  */ ((value.plc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.plc, $.BER)),
            /* IF_ABSENT  */ ((value.pcn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.pcn, $.BER)),
            /* IF_ABSENT  */ ((value.pobox === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.pobox, $.BER)),
            /* IF_ABSENT  */ ((value.addcode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeUTF8String, $.BER)(value.addcode, $.BER)),
            /* IF_ABSENT  */ ((value.seat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeUTF8String, $.BER)(value.seat, $.BER)),
            /* IF_ABSENT  */ ((value.rd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.rd, $.BER)),
            /* IF_ABSENT  */ ((value.rdsec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.rdsec, $.BER)),
            /* IF_ABSENT  */ ((value.rdbr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.rdbr, $.BER)),
            /* IF_ABSENT  */ ((value.rdsubbr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => $._encodeUTF8String, $.BER)(value.rdsubbr, $.BER)),
            /* IF_ABSENT  */ ((value.prm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.prm, $.BER)),
            /* IF_ABSENT  */ ((value.pom === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => $._encodeUTF8String, $.BER)(value.pom, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CivicAddress(value, elGetter);
}


/* eslint-enable */
