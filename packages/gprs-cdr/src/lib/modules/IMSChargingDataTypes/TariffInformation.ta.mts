/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    REAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RateElement, _decode_RateElement, _encode_RateElement } from "../IMSChargingDataTypes/RateElement.ta.mjs";
// export { RateElement, _decode_RateElement, _encode_RateElement } from "../IMSChargingDataTypes/RateElement.ta.mjs";


/**
 * @summary TariffInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffInformation ::= SEQUENCE {
 *    currencyCode   [0] IMPLICIT INTEGER,
 *    scaleFactor    [1] IMPLICIT REAL,
 *    rateElements   [2] IMPLICIT SEQUENCE  OF
 *       RateElement OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TariffInformation {
    /**
     * @summary `currencyCode`.
     * @public
     * @readonly
     */
    readonly currencyCode: INTEGER;
    /**
     * @summary `scaleFactor`.
     * @public
     * @readonly
     */
    readonly scaleFactor: REAL;
    /**
     * @summary `rateElements`.
     * @public
     * @readonly
     */
    readonly rateElements: OPTIONAL<RateElement[]>;

    constructor (
        currencyCode: INTEGER,
        scaleFactor: REAL,
        rateElements: OPTIONAL<RateElement[]>
    ) {
        this.currencyCode = currencyCode;
        this.scaleFactor = scaleFactor;
        this.rateElements = rateElements;
    }

    /**
     * @summary Restructures an object into a TariffInformation
     * @description
     * 
     * This takes an `object` and converts it to a `TariffInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TariffInformation`.
     * @returns {TariffInformation}
     */
    public static _from_object (_o: { [_K in keyof (TariffInformation)]: (TariffInformation)[_K] }): TariffInformation {
        return new TariffInformation(_o.currencyCode, _o.scaleFactor, _o.rateElements);
    }


}

/**
 * @summary The Leading Root Component Types of TariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TariffInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("currencyCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scaleFactor", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rateElements", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TariffInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TariffInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TariffInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TariffInformation: $.ASN1Decoder<TariffInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffInformation (el: _Element): TariffInformation {
    if (!_cached_decoder_for_TariffInformation) { _cached_decoder_for_TariffInformation = function (el: _Element): TariffInformation {
    let currencyCode!: INTEGER;
    let scaleFactor!: REAL;
    let rateElements: OPTIONAL<RateElement[]>;
    const callbacks: $.DecodingMap = {
        "currencyCode": (_el: _Element): void => { currencyCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scaleFactor": (_el: _Element): void => { scaleFactor = $._decode_implicit<REAL>(() => $._decodeReal)(_el); },
        "rateElements": (_el: _Element): void => { rateElements = $._decode_implicit<RateElement[]>(() => $._decodeSequenceOf<RateElement>(() => _decode_RateElement))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TariffInformation,
        _extension_additions_list_spec_for_TariffInformation,
        _root_component_type_list_2_spec_for_TariffInformation,
        undefined,
    );
    return new TariffInformation(
        currencyCode,
        scaleFactor,
        rateElements
    );
}; }
    return _cached_decoder_for_TariffInformation(el);
}

let _cached_encoder_for_TariffInformation: $.ASN1Encoder<TariffInformation> | null = null;

/**
 * @summary Encodes a(n) TariffInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TariffInformation (value: TariffInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffInformation) { _cached_encoder_for_TariffInformation = function (value: TariffInformation, elGetter: $.ASN1Encoder<TariffInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.currencyCode, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.scaleFactor, $.BER));
    if (value.rateElements !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<RateElement>(() => _encode_RateElement, $.BER), $.BER)(value.rateElements, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TariffInformation(value, elGetter);
}


/* eslint-enable */
