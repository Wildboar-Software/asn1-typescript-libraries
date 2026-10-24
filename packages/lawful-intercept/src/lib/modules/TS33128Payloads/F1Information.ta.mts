/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
// export { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";


/**
 * @summary F1Information
 * @description
 * 
 * Information pertaining to the setup of the F1 Interface. See TS 38.473 [103]
 * clauses 9.2.1.4 and 9.2.1.5.
 *
 * 3GPP TS 33.128, clause 7.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `gNBDUID`.
     * @public
     * @readonly
     */
    readonly gNBDUID: INTEGER;
    /**
     * @summary `gNBDUName`.
     * @public
     * @readonly
     */
    readonly gNBDUName: OPTIONAL<UTF8String>;
    /**
     * @summary `gNBCUName`.
     * @public
     * @readonly
     */
    readonly gNBCUName: OPTIONAL<UTF8String>;
    /**
     * @summary `gNBDUServedCells`.
     * @public
     * @readonly
     */
    readonly gNBDUServedCells: RANCGI[];
    /**
     * @summary `extendedGNBDUName`.
     * @public
     * @readonly
     */
    readonly extendedGNBDUName: OPTIONAL<UTF8String>;
    /**
     * @summary `extendedGNBCUName`.
     * @public
     * @readonly
     */
    readonly extendedGNBCUName: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gNBDUID: INTEGER,
        gNBDUName: OPTIONAL<UTF8String>,
        gNBCUName: OPTIONAL<UTF8String>,
        gNBDUServedCells: RANCGI[],
        extendedGNBDUName?: OPTIONAL<UTF8String>,
        extendedGNBCUName?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gNBDUID = gNBDUID;
        this.gNBDUName = gNBDUName;
        this.gNBCUName = gNBCUName;
        this.gNBDUServedCells = gNBDUServedCells;
        this.extendedGNBDUName = extendedGNBDUName;
        this.extendedGNBCUName = extendedGNBCUName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new F1Information(_o.gNBDUID, _o.gNBDUName, _o.gNBCUName, _o.gNBDUServedCells, _o.extendedGNBDUName, _o.extendedGNBCUName, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gNBDUID": (_el: _Element): void => {
            gNBDUID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof gNBDUID === "bigint" ? gNBDUID : BigInt(gNBDUID);
            if (_n < 0n || _n > 68719476735n) {
                throw new ASN1OverflowError("F1Information.gNBDUID violates INTEGER range");
            }
        },
        "gNBDUName": (_el: _Element): void => { gNBDUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gNBCUName": (_el: _Element): void => { gNBCUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gNBDUServedCells": (_el: _Element): void => {
            gNBDUServedCells = $._decode_implicit<RANCGI[]>(() => $._decodeSequenceOf<RANCGI>(() => _decode_RANCGI))(_el);
            if (gNBDUServedCells.length < 1) {
                throw new ASN1SizeError("F1Information.gNBDUServedCells violates SIZE constraint");
            }
        },
        "extendedGNBDUName": (_el: _Element): void => { extendedGNBDUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "extendedGNBCUName": (_el: _Element): void => { extendedGNBCUName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_F1Information,
        _extension_additions_list_spec_for_F1Information,
        _root_component_type_list_2_spec_for_F1Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new F1Information(
        gNBDUID,
        gNBDUName,
        gNBCUName,
        gNBDUServedCells,
        extendedGNBDUName,
        extendedGNBCUName,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.gNBDUID, $.BER);
    if (value.gNBDUName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.gNBDUName, $.BER);
    }
    if (value.gNBCUName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.gNBCUName, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<RANCGI>(() => _encode_RANCGI, $.BER), $.BER)(value.gNBDUServedCells, $.BER);
    if (value.extendedGNBDUName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.extendedGNBDUName, $.BER);
    }
    if (value.extendedGNBCUName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.extendedGNBCUName, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_F1Information(value, elGetter);
}


/* eslint-enable */
