/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OPTIONAL,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TetraLocation_ms_Loc
 * @description
 * 
 * Mobile-station alternative of `TetraLocation`. The choice is not in use
 * anymore and is kept so that old encodings can be read. The integer ranges
 * below are the retained coding, not a current TETRA location procedure.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TetraLocation-ms-Loc ::= SEQUENCE {
 *     mcc                [1] INTEGER (0..1023),
 *     -- 10 bits EN 300 392-1 [40]
 *     mnc                [2] INTEGER (0..16383),
 *     -- 14 bits EN 300 392-1 [40]
 *     lai                [3] INTEGER (0..65535),
 *     -- 14 bits EN 300 392-1 [40]
 *     ci                [4] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TetraLocation_ms_Loc {
    /**
     * @summary `mcc`.
     * @description
     *
     * Mobile country code. Integer 0 to 1023. The module says 10 bits, EN 300
     * 392-1. Retained only for compatibility.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly mcc: INTEGER;
    /**
     * @summary `mnc`.
     * @description
     *
     * Mobile network code. Integer 0 to 16383. The module says 14 bits, EN 300
     * 392-1. Retained only for compatibility.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly mnc: INTEGER;
    /**
     * @summary `lai`.
     * @description
     *
     * Location area identity. Integer 0 to 65535. The module's comment says 14
     * bits, EN 300 392-1. The specification does not explain the difference
     * between that comment and the integer range. Retained only for
     * compatibility.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly lai: INTEGER;
    /**
     * @summary `ci`.
     * @description
     *
     * Optional cell identity. The module gives no range and no reference.
     * Retained only for compatibility.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly ci: OPTIONAL<INTEGER>;

    constructor (
        mcc: INTEGER,
        mnc: INTEGER,
        lai: INTEGER,
        ci?: OPTIONAL<INTEGER>
    ) {
        this.mcc = mcc;
        this.mnc = mnc;
        this.lai = lai;
        this.ci = ci;
    }

    /**
     * @summary Restructures an object into a TetraLocation_ms_Loc
     * @description
     * 
     * This takes an `object` and converts it to a `TetraLocation_ms_Loc`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TetraLocation_ms_Loc`.
     * @returns {TetraLocation_ms_Loc}
     */
    public static _from_object (_o: { [_K in keyof (TetraLocation_ms_Loc)]: (TetraLocation_ms_Loc)[_K] }): TetraLocation_ms_Loc {
        return new TetraLocation_ms_Loc(_o.mcc, _o.mnc, _o.lai, _o.ci);
    }


}

/**
 * @summary The Leading Root Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    new $.ComponentSpec("mcc", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mnc", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lai", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ci", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TetraLocation_ms_Loc: $.ASN1Decoder<TetraLocation_ms_Loc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TetraLocation_ms_Loc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TetraLocation_ms_Loc (el: _Element): TetraLocation_ms_Loc {
    if (!_cached_decoder_for_TetraLocation_ms_Loc) { _cached_decoder_for_TetraLocation_ms_Loc = function (el: _Element): TetraLocation_ms_Loc {
    let mcc!: INTEGER;
    let mnc!: INTEGER;
    let lai!: INTEGER;
    let ci: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "mcc": (_el: _Element): void => {
            mcc = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof mcc === "bigint" ? mcc : BigInt(mcc);
            if (_n < 0n || _n > 1023n) {
                throw new ASN1OverflowError("TetraLocation_ms_Loc.mcc violates INTEGER range");
            }
        },
        "mnc": (_el: _Element): void => {
            mnc = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof mnc === "bigint" ? mnc : BigInt(mnc);
            if (_n < 0n || _n > 16383n) {
                throw new ASN1OverflowError("TetraLocation_ms_Loc.mnc violates INTEGER range");
            }
        },
        "lai": (_el: _Element): void => {
            lai = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof lai === "bigint" ? lai : BigInt(lai);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("TetraLocation_ms_Loc.lai violates INTEGER range");
            }
        },
        "ci": (_el: _Element): void => { ci = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TetraLocation_ms_Loc,
        _extension_additions_list_spec_for_TetraLocation_ms_Loc,
        _root_component_type_list_2_spec_for_TetraLocation_ms_Loc,
        undefined,
    );
    return new TetraLocation_ms_Loc(
        mcc,
        mnc,
        lai,
        ci
    );
}; }
    return _cached_decoder_for_TetraLocation_ms_Loc(el);
}

let _cached_encoder_for_TetraLocation_ms_Loc: $.ASN1Encoder<TetraLocation_ms_Loc> | null = null;

/**
 * @summary Encodes a(n) TetraLocation_ms_Loc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TetraLocation_ms_Loc, encoded as an ASN.1 Element.
 */
export
function _encode_TetraLocation_ms_Loc (value: TetraLocation_ms_Loc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TetraLocation_ms_Loc) { _cached_encoder_for_TetraLocation_ms_Loc = function (value: TetraLocation_ms_Loc, elGetter: $.ASN1Encoder<TetraLocation_ms_Loc>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mcc, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.mnc, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.lai, $.BER);
    if (value.ci !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.ci, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TetraLocation_ms_Loc(value, elGetter);
}


/* eslint-enable */
