/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordedCurrency, _decode_RecordedCurrency, _encode_RecordedCurrency } from "../SS-AOC-Operations-asn1-97/RecordedCurrency.ta.mjs";
import { FinalBillingId, _decode_FinalBillingId, _encode_FinalBillingId, _enum_for_FinalBillingId } from "../SS-AOC-Operations-asn1-97/FinalBillingId.ta.mjs";

/**
 * @summary AocFinalArg_finalCharge_specificCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocFinalArg-finalCharge-specificCurrency ::= SEQUENCE {
 *     recordedCurrency [1] IMPLICIT RecordedCurrency,
 *     finalBillingId [2] IMPLICIT FinalBillingId OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocFinalArg_finalCharge_specificCurrency {
    /**
     * @summary `recordedCurrency`.
     * @public
     * @readonly
     */
    readonly recordedCurrency: RecordedCurrency;
    /**
     * @summary `finalBillingId`.
     * @public
     * @readonly
     */
    readonly finalBillingId: OPTIONAL<FinalBillingId>;

    constructor (
        recordedCurrency: RecordedCurrency,
        finalBillingId: OPTIONAL<FinalBillingId>
    ) {
        this.recordedCurrency = recordedCurrency;
        this.finalBillingId = finalBillingId;
    }

    /**
     * @summary Restructures an object into a AocFinalArg_finalCharge_specificCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `AocFinalArg_finalCharge_specificCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocFinalArg_finalCharge_specificCurrency`.
     * @returns {AocFinalArg_finalCharge_specificCurrency}
     */
    public static _from_object (_o: { [_K in keyof (AocFinalArg_finalCharge_specificCurrency)]: (AocFinalArg_finalCharge_specificCurrency)[_K] }): AocFinalArg_finalCharge_specificCurrency {
        return new AocFinalArg_finalCharge_specificCurrency(_o.recordedCurrency, _o.finalBillingId);
    }

        /**
         * @summary The enum used as the type of the component `finalBillingId`
         * @public
         * @static
         */

    public static _enum_for_finalBillingId = _enum_for_FinalBillingId;
}

/**
 * @summary The Leading Root Component Types of AocFinalArg_finalCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocFinalArg_finalCharge_specificCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("recordedCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("finalBillingId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AocFinalArg_finalCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocFinalArg_finalCharge_specificCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocFinalArg_finalCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocFinalArg_finalCharge_specificCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocFinalArg_finalCharge_specificCurrency: $.ASN1Decoder<AocFinalArg_finalCharge_specificCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocFinalArg_finalCharge_specificCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocFinalArg_finalCharge_specificCurrency (el: _Element): AocFinalArg_finalCharge_specificCurrency {
    if (!_cached_decoder_for_AocFinalArg_finalCharge_specificCurrency) { _cached_decoder_for_AocFinalArg_finalCharge_specificCurrency = function (el: _Element): AocFinalArg_finalCharge_specificCurrency {
    let recordedCurrency!: RecordedCurrency;
    let finalBillingId: OPTIONAL<FinalBillingId>;
    const callbacks: $.DecodingMap = {
        "recordedCurrency": (_el: _Element): void => { recordedCurrency = $._decode_implicit<RecordedCurrency>(() => _decode_RecordedCurrency)(_el); },
        "finalBillingId": (_el: _Element): void => { finalBillingId = $._decode_implicit<FinalBillingId>(() => _decode_FinalBillingId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocFinalArg_finalCharge_specificCurrency,
        _extension_additions_list_spec_for_AocFinalArg_finalCharge_specificCurrency,
        _root_component_type_list_2_spec_for_AocFinalArg_finalCharge_specificCurrency,
        undefined,
    );
    return new AocFinalArg_finalCharge_specificCurrency(
        recordedCurrency,
        finalBillingId
    );
}; }
    return _cached_decoder_for_AocFinalArg_finalCharge_specificCurrency(el);
}

let _cached_encoder_for_AocFinalArg_finalCharge_specificCurrency: $.ASN1Encoder<AocFinalArg_finalCharge_specificCurrency> | null = null;

/**
 * @summary Encodes a(n) AocFinalArg_finalCharge_specificCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocFinalArg_finalCharge_specificCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_AocFinalArg_finalCharge_specificCurrency (value: AocFinalArg_finalCharge_specificCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocFinalArg_finalCharge_specificCurrency) { _cached_encoder_for_AocFinalArg_finalCharge_specificCurrency = function (value: AocFinalArg_finalCharge_specificCurrency, _elGetter: $.ASN1Encoder<AocFinalArg_finalCharge_specificCurrency>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RecordedCurrency, $.BER)(value.recordedCurrency, $.BER));
    if (value.finalBillingId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FinalBillingId, $.BER)(value.finalBillingId, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocFinalArg_finalCharge_specificCurrency(value, elGetter);
}

/* eslint-enable */
