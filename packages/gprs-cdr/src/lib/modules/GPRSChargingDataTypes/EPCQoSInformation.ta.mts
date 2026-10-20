/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPCQoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPCQoSInformation ::= SEQUENCE {
 *    qCI                        [1] IMPLICIT INTEGER,
 *    maxRequestedBandwithUL     [2] IMPLICIT INTEGER OPTIONAL,
 *    maxRequestedBandwithDL     [3] IMPLICIT INTEGER OPTIONAL,
 *    guaranteedBitrateUL        [4] IMPLICIT INTEGER OPTIONAL,
 *    guaranteedBitrateDL        [5] IMPLICIT INTEGER OPTIONAL,
 *    aRP                        [6] IMPLICIT INTEGER OPTIONAL,
 *    aPNAggregateMaxBitrateUL   [7] IMPLICIT INTEGER OPTIONAL,
 *    aPNAggregateMaxBitrateDL   [8] IMPLICIT INTEGER OPTIONAL,
 *    extendedMaxRequestedBWUL   [9] IMPLICIT INTEGER OPTIONAL,
 *    extendedMaxRequestedBWDL   [10] IMPLICIT INTEGER OPTIONAL,
 *    extendedGBRUL              [11] IMPLICIT INTEGER OPTIONAL,
 *    extendedGBRDL              [12] IMPLICIT INTEGER OPTIONAL,
 *    extendedAPNAMBRUL          [13] IMPLICIT INTEGER OPTIONAL,
 *    extendedAPNAMBRDL          [14] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EPCQoSInformation {
    /**
     * @summary `qCI`.
     * @public
     * @readonly
     */
    readonly qCI: INTEGER;
    /**
     * @summary `maxRequestedBandwithUL`.
     * @public
     * @readonly
     */
    readonly maxRequestedBandwithUL: OPTIONAL<INTEGER>;
    /**
     * @summary `maxRequestedBandwithDL`.
     * @public
     * @readonly
     */
    readonly maxRequestedBandwithDL: OPTIONAL<INTEGER>;
    /**
     * @summary `guaranteedBitrateUL`.
     * @public
     * @readonly
     */
    readonly guaranteedBitrateUL: OPTIONAL<INTEGER>;
    /**
     * @summary `guaranteedBitrateDL`.
     * @public
     * @readonly
     */
    readonly guaranteedBitrateDL: OPTIONAL<INTEGER>;
    /**
     * @summary `aRP`.
     * @public
     * @readonly
     */
    readonly aRP: OPTIONAL<INTEGER>;
    /**
     * @summary `aPNAggregateMaxBitrateUL`.
     * @public
     * @readonly
     */
    readonly aPNAggregateMaxBitrateUL: OPTIONAL<INTEGER>;
    /**
     * @summary `aPNAggregateMaxBitrateDL`.
     * @public
     * @readonly
     */
    readonly aPNAggregateMaxBitrateDL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedMaxRequestedBWUL`.
     * @public
     * @readonly
     */
    readonly extendedMaxRequestedBWUL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedMaxRequestedBWDL`.
     * @public
     * @readonly
     */
    readonly extendedMaxRequestedBWDL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedGBRUL`.
     * @public
     * @readonly
     */
    readonly extendedGBRUL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedGBRDL`.
     * @public
     * @readonly
     */
    readonly extendedGBRDL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedAPNAMBRUL`.
     * @public
     * @readonly
     */
    readonly extendedAPNAMBRUL: OPTIONAL<INTEGER>;
    /**
     * @summary `extendedAPNAMBRDL`.
     * @public
     * @readonly
     */
    readonly extendedAPNAMBRDL: OPTIONAL<INTEGER>;

    constructor (
        qCI: INTEGER,
        maxRequestedBandwithUL: OPTIONAL<INTEGER>,
        maxRequestedBandwithDL: OPTIONAL<INTEGER>,
        guaranteedBitrateUL: OPTIONAL<INTEGER>,
        guaranteedBitrateDL: OPTIONAL<INTEGER>,
        aRP: OPTIONAL<INTEGER>,
        aPNAggregateMaxBitrateUL: OPTIONAL<INTEGER>,
        aPNAggregateMaxBitrateDL: OPTIONAL<INTEGER>,
        extendedMaxRequestedBWUL: OPTIONAL<INTEGER>,
        extendedMaxRequestedBWDL: OPTIONAL<INTEGER>,
        extendedGBRUL: OPTIONAL<INTEGER>,
        extendedGBRDL: OPTIONAL<INTEGER>,
        extendedAPNAMBRUL: OPTIONAL<INTEGER>,
        extendedAPNAMBRDL: OPTIONAL<INTEGER>
    ) {
        this.qCI = qCI;
        this.maxRequestedBandwithUL = maxRequestedBandwithUL;
        this.maxRequestedBandwithDL = maxRequestedBandwithDL;
        this.guaranteedBitrateUL = guaranteedBitrateUL;
        this.guaranteedBitrateDL = guaranteedBitrateDL;
        this.aRP = aRP;
        this.aPNAggregateMaxBitrateUL = aPNAggregateMaxBitrateUL;
        this.aPNAggregateMaxBitrateDL = aPNAggregateMaxBitrateDL;
        this.extendedMaxRequestedBWUL = extendedMaxRequestedBWUL;
        this.extendedMaxRequestedBWDL = extendedMaxRequestedBWDL;
        this.extendedGBRUL = extendedGBRUL;
        this.extendedGBRDL = extendedGBRDL;
        this.extendedAPNAMBRUL = extendedAPNAMBRUL;
        this.extendedAPNAMBRDL = extendedAPNAMBRDL;
    }

    /**
     * @summary Restructures an object into a EPCQoSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EPCQoSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPCQoSInformation`.
     * @returns {EPCQoSInformation}
     */
    public static _from_object (_o: { [_K in keyof (EPCQoSInformation)]: (EPCQoSInformation)[_K] }): EPCQoSInformation {
        return new EPCQoSInformation(_o.qCI, _o.maxRequestedBandwithUL, _o.maxRequestedBandwithDL, _o.guaranteedBitrateUL, _o.guaranteedBitrateDL, _o.aRP, _o.aPNAggregateMaxBitrateUL, _o.aPNAggregateMaxBitrateDL, _o.extendedMaxRequestedBWUL, _o.extendedMaxRequestedBWDL, _o.extendedGBRUL, _o.extendedGBRDL, _o.extendedAPNAMBRUL, _o.extendedAPNAMBRDL);
    }


}

/**
 * @summary The Leading Root Component Types of EPCQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPCQoSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("qCI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxRequestedBandwithUL", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maxRequestedBandwithDL", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("guaranteedBitrateUL", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("guaranteedBitrateDL", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aRP", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aPNAggregateMaxBitrateUL", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aPNAggregateMaxBitrateDL", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extendedMaxRequestedBWUL", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extendedMaxRequestedBWDL", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extendedGBRUL", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("extendedGBRDL", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extendedAPNAMBRUL", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("extendedAPNAMBRDL", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of EPCQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPCQoSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPCQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPCQoSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPCQoSInformation: $.ASN1Decoder<EPCQoSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPCQoSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPCQoSInformation (el: _Element): EPCQoSInformation {
    if (!_cached_decoder_for_EPCQoSInformation) { _cached_decoder_for_EPCQoSInformation = function (el: _Element): EPCQoSInformation {
    let qCI!: INTEGER;
    let maxRequestedBandwithUL: OPTIONAL<INTEGER>;
    let maxRequestedBandwithDL: OPTIONAL<INTEGER>;
    let guaranteedBitrateUL: OPTIONAL<INTEGER>;
    let guaranteedBitrateDL: OPTIONAL<INTEGER>;
    let aRP: OPTIONAL<INTEGER>;
    let aPNAggregateMaxBitrateUL: OPTIONAL<INTEGER>;
    let aPNAggregateMaxBitrateDL: OPTIONAL<INTEGER>;
    let extendedMaxRequestedBWUL: OPTIONAL<INTEGER>;
    let extendedMaxRequestedBWDL: OPTIONAL<INTEGER>;
    let extendedGBRUL: OPTIONAL<INTEGER>;
    let extendedGBRDL: OPTIONAL<INTEGER>;
    let extendedAPNAMBRUL: OPTIONAL<INTEGER>;
    let extendedAPNAMBRDL: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "qCI": (_el: _Element): void => { qCI = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxRequestedBandwithUL": (_el: _Element): void => { maxRequestedBandwithUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxRequestedBandwithDL": (_el: _Element): void => { maxRequestedBandwithDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "guaranteedBitrateUL": (_el: _Element): void => { guaranteedBitrateUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "guaranteedBitrateDL": (_el: _Element): void => { guaranteedBitrateDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aRP": (_el: _Element): void => { aRP = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aPNAggregateMaxBitrateUL": (_el: _Element): void => { aPNAggregateMaxBitrateUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aPNAggregateMaxBitrateDL": (_el: _Element): void => { aPNAggregateMaxBitrateDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedMaxRequestedBWUL": (_el: _Element): void => { extendedMaxRequestedBWUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedMaxRequestedBWDL": (_el: _Element): void => { extendedMaxRequestedBWDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedGBRUL": (_el: _Element): void => { extendedGBRUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedGBRDL": (_el: _Element): void => { extendedGBRDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedAPNAMBRUL": (_el: _Element): void => { extendedAPNAMBRUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extendedAPNAMBRDL": (_el: _Element): void => { extendedAPNAMBRDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPCQoSInformation,
        _extension_additions_list_spec_for_EPCQoSInformation,
        _root_component_type_list_2_spec_for_EPCQoSInformation,
        undefined,
    );
    return new EPCQoSInformation(
        qCI,
        maxRequestedBandwithUL,
        maxRequestedBandwithDL,
        guaranteedBitrateUL,
        guaranteedBitrateDL,
        aRP,
        aPNAggregateMaxBitrateUL,
        aPNAggregateMaxBitrateDL,
        extendedMaxRequestedBWUL,
        extendedMaxRequestedBWDL,
        extendedGBRUL,
        extendedGBRDL,
        extendedAPNAMBRUL,
        extendedAPNAMBRDL
    );
}; }
    return _cached_decoder_for_EPCQoSInformation(el);
}

let _cached_encoder_for_EPCQoSInformation: $.ASN1Encoder<EPCQoSInformation> | null = null;

/**
 * @summary Encodes a(n) EPCQoSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPCQoSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EPCQoSInformation (value: EPCQoSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPCQoSInformation) { _cached_encoder_for_EPCQoSInformation = function (value: EPCQoSInformation, _elGetter: $.ASN1Encoder<EPCQoSInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.qCI, $.BER));
    if (value.maxRequestedBandwithUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.maxRequestedBandwithUL, $.BER));
    }
    if (value.maxRequestedBandwithDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.maxRequestedBandwithDL, $.BER));
    }
    if (value.guaranteedBitrateUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.guaranteedBitrateUL, $.BER));
    }
    if (value.guaranteedBitrateDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.guaranteedBitrateDL, $.BER));
    }
    if (value.aRP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.aRP, $.BER));
    }
    if (value.aPNAggregateMaxBitrateUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.aPNAggregateMaxBitrateUL, $.BER));
    }
    if (value.aPNAggregateMaxBitrateDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.aPNAggregateMaxBitrateDL, $.BER));
    }
    if (value.extendedMaxRequestedBWUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.extendedMaxRequestedBWUL, $.BER));
    }
    if (value.extendedMaxRequestedBWDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.extendedMaxRequestedBWDL, $.BER));
    }
    if (value.extendedGBRUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.extendedGBRUL, $.BER));
    }
    if (value.extendedGBRDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.extendedGBRDL, $.BER));
    }
    if (value.extendedAPNAMBRUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.extendedAPNAMBRUL, $.BER));
    }
    if (value.extendedAPNAMBRDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.extendedAPNAMBRDL, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPCQoSInformation(value, elGetter);
}


/* eslint-enable */
