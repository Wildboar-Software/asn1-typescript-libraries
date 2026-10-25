/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MCCType, _decode_MCCType, _encode_MCCType } from "../EN301040/MCCType.ta.mjs";
// export { MCCType, _decode_MCCType, _encode_MCCType } from "../EN301040/MCCType.ta.mjs";
import { type MNCType, _decode_MNCType, _encode_MNCType } from "../EN301040/MNCType.ta.mjs";
// export { MNCType, _decode_MNCType, _encode_MNCType } from "../EN301040/MNCType.ta.mjs";
import { type LocationAreaType, _decode_LocationAreaType, _encode_LocationAreaType } from "../EN301040/LocationAreaType.ta.mjs";
// export { LocationAreaType, _decode_LocationAreaType, _encode_LocationAreaType } from "../EN301040/LocationAreaType.ta.mjs";
import { type CellIdType, _decode_CellIdType, _encode_CellIdType } from "../EN301040/CellIdType.ta.mjs";
// export { CellIdType, _decode_CellIdType, _encode_CellIdType } from "../EN301040/CellIdType.ta.mjs";


/**
 * @summary TETRACGIType
 * @description
 * 
 * TETRA Cell Global Identification of a mobile user: country code, network
 * code, location area, and an optional cell identity. On initialization of
 * interception, `mcc` and `mnc` in particular may be system defaults. SwMI
 * network management should also offer a current translation of this identity
 * to national map coordinates. The method of that translation is outside the
 * scope of EN 301 040.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRACGIType ::= SEQUENCE {
 *     mcc        MCCType,
 *     mnc        MNCType,
 *     lai        LocationAreaType,
 *     cI        CellIdType    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TETRACGIType {
    /**
     * @summary `mcc`.
     * @description
     *
     * Mobile Country Code of the cell, 10 bits, as defined in EN 300 392-1. May
     * be a system default when interception is initialized.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly mcc: MCCType;
    /**
     * @summary `mnc`.
     * @description
     *
     * Mobile Network Code of the cell, 14 bits, as defined in EN 300 392-1. May
     * be a system default when interception is initialized.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly mnc: MNCType;
    /**
     * @summary `lai`.
     * @description
     *
     * Location area, 14 bits, as defined in EN 300 392-2. Clause 4.4: the
     * location area at which the target is registered.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1, clause 4.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly lai: LocationAreaType;
    /**
     * @summary `cI`.
     * @description
     *
     * Cell identity, 16 bits, present when the base station is known.
     * Clause 4.4 allows the location to name the base station when that is
     * available, and otherwise the location area.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1, clause 4.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cI: OPTIONAL<CellIdType>;

    constructor (
        mcc: MCCType,
        mnc: MNCType,
        lai: LocationAreaType,
        cI?: OPTIONAL<CellIdType>
    ) {
        this.mcc = mcc;
        this.mnc = mnc;
        this.lai = lai;
        this.cI = cI;
    }

    /**
     * @summary Restructures an object into a TETRACGIType
     * @description
     * 
     * This takes an `object` and converts it to a `TETRACGIType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TETRACGIType`.
     * @returns {TETRACGIType}
     */
    public static _from_object (_o: { [_K in keyof (TETRACGIType)]: (TETRACGIType)[_K] }): TETRACGIType {
        return new TETRACGIType(_o.mcc, _o.mnc, _o.lai, _o.cI);
    }


}

/**
 * @summary The Leading Root Component Types of TETRACGIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TETRACGIType: $.ComponentSpec[] = [
    new $.ComponentSpec("mcc", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mnc", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lai", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cI", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TETRACGIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TETRACGIType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TETRACGIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TETRACGIType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TETRACGIType: $.ASN1Decoder<TETRACGIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TETRACGIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TETRACGIType (el: _Element): TETRACGIType {
    if (!_cached_decoder_for_TETRACGIType) { _cached_decoder_for_TETRACGIType = function (el: _Element): TETRACGIType {
    let mcc!: MCCType;
    let mnc!: MNCType;
    let lai!: LocationAreaType;
    let cI: OPTIONAL<CellIdType>;
    const callbacks: $.DecodingMap = {
        "mcc": (_el: _Element): void => { mcc = _decode_MCCType(_el); },
        "mnc": (_el: _Element): void => { mnc = _decode_MNCType(_el); },
        "lai": (_el: _Element): void => { lai = _decode_LocationAreaType(_el); },
        "cI": (_el: _Element): void => { cI = _decode_CellIdType(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TETRACGIType,
        _extension_additions_list_spec_for_TETRACGIType,
        _root_component_type_list_2_spec_for_TETRACGIType,
        undefined,
    );
    return new TETRACGIType(
        mcc,
        mnc,
        lai,
        cI
    );
}; }
    return _cached_decoder_for_TETRACGIType(el);
}

let _cached_encoder_for_TETRACGIType: $.ASN1Encoder<TETRACGIType> | null = null;

/**
 * @summary Encodes a(n) TETRACGIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TETRACGIType, encoded as an ASN.1 Element.
 */
export
function _encode_TETRACGIType (value: TETRACGIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TETRACGIType) { _cached_encoder_for_TETRACGIType = function (value: TETRACGIType, elGetter: $.ASN1Encoder<TETRACGIType>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MCCType, $.BER)(value.mcc, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MNCType, $.BER)(value.mnc, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LocationAreaType, $.BER)(value.lai, $.BER);
    if (value.cI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CellIdType, $.BER)(value.cI, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TETRACGIType(value, elGetter);
}


/* eslint-enable */
