/* eslint-disable */
import {
    OPTIONAL,
    GeneralizedTime,
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



/**
 * @summary RangeOfDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeOfDate ::= SEQUENCE {
 *     startDate   GeneralizedTime OPTIONAL,
 *     endDate     [0] GeneralizedTime OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RangeOfDate {
    constructor (
        /**
         * @summary `startDate`.
         * @public
         * @readonly
         */
        readonly startDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endDate`.
         * @public
         * @readonly
         */
        readonly endDate: OPTIONAL<GeneralizedTime>
    ) {}

    /**
     * @summary Restructures an object into a RangeOfDate
     * @description
     * 
     * This takes an `object` and converts it to a `RangeOfDate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RangeOfDate`.
     * @returns {RangeOfDate}
     */
    public static _from_object (_o: { [_K in keyof (RangeOfDate)]: (RangeOfDate)[_K] }): RangeOfDate {
        return new RangeOfDate(_o.startDate, _o.endDate);
    }


}

/**
 * @summary The Leading Root Component Types of RangeOfDate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RangeOfDate: $.ComponentSpec[] = [
    new $.ComponentSpec("startDate", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("endDate", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of RangeOfDate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RangeOfDate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RangeOfDate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RangeOfDate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RangeOfDate: $.ASN1Decoder<RangeOfDate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RangeOfDate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RangeOfDate (el: _Element): RangeOfDate {
    if (!_cached_decoder_for_RangeOfDate) { _cached_decoder_for_RangeOfDate = function (el: _Element): RangeOfDate {
    let startDate: OPTIONAL<GeneralizedTime>;
    let endDate: OPTIONAL<GeneralizedTime>;
    const callbacks: $.DecodingMap = {
        "startDate": (_el: _Element): void => { startDate = $._decodeGeneralizedTime(_el); },
        "endDate": (_el: _Element): void => { endDate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RangeOfDate,
        _extension_additions_list_spec_for_RangeOfDate,
        _root_component_type_list_2_spec_for_RangeOfDate,
        undefined,
    );
    return new RangeOfDate(
        startDate,
        endDate
    );
}; }
    return _cached_decoder_for_RangeOfDate(el);
}

let _cached_encoder_for_RangeOfDate: $.ASN1Encoder<RangeOfDate> | null = null;

/**
 * @summary Encodes a(n) RangeOfDate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeOfDate, encoded as an ASN.1 Element.
 */
export
function _encode_RangeOfDate (value: RangeOfDate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RangeOfDate) { _cached_encoder_for_RangeOfDate = function (value: RangeOfDate): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.startDate === undefined) ? undefined : $._encodeGeneralizedTime(value.startDate, $.BER)),
            /* IF_ABSENT  */ ((value.endDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.endDate, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RangeOfDate(value, elGetter);
}


/* eslint-enable */
