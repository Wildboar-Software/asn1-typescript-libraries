/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordedCurrency, _decode_RecordedCurrency, _encode_RecordedCurrency } from "../SS-AOC-Operations-asn1-97/RecordedCurrency.ta.mjs";
// export { RecordedCurrency, _decode_RecordedCurrency, _encode_RecordedCurrency } from "../SS-AOC-Operations-asn1-97/RecordedCurrency.ta.mjs";
import { InterimBillingId, _decode_InterimBillingId, _encode_InterimBillingId, _enum_for_InterimBillingId } from "../SS-AOC-Operations-asn1-97/InterimBillingId.ta.mjs";
// export { InterimBillingId, _enum_for_InterimBillingId, InterimBillingId_normalCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, normalCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterimBillingId_creditCardCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, creditCardCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InterimBillingId, _encode_InterimBillingId } from "../SS-AOC-Operations-asn1-97/InterimBillingId.ta.mjs";


/**
 * @summary AocInterimArg_interimCharge_specificCurrency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocInterimArg-interimCharge-specificCurrency ::= SEQUENCE {
 *     recordedCurrency [1] IMPLICIT RecordedCurrency,
 *     interimBillingId [2] IMPLICIT InterimBillingId OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocInterimArg_interimCharge_specificCurrency {
    /**
     * @summary `recordedCurrency`.
     * @public
     * @readonly
     */
    readonly recordedCurrency: RecordedCurrency;
    /**
     * @summary `interimBillingId`.
     * @public
     * @readonly
     */
    readonly interimBillingId: OPTIONAL<InterimBillingId>;

    constructor (
        recordedCurrency: RecordedCurrency,
        interimBillingId: OPTIONAL<InterimBillingId>
    ) {
        this.recordedCurrency = recordedCurrency;
        this.interimBillingId = interimBillingId;
    }

    /**
     * @summary Restructures an object into a AocInterimArg_interimCharge_specificCurrency
     * @description
     * 
     * This takes an `object` and converts it to a `AocInterimArg_interimCharge_specificCurrency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocInterimArg_interimCharge_specificCurrency`.
     * @returns {AocInterimArg_interimCharge_specificCurrency}
     */
    public static _from_object (_o: { [_K in keyof (AocInterimArg_interimCharge_specificCurrency)]: (AocInterimArg_interimCharge_specificCurrency)[_K] }): AocInterimArg_interimCharge_specificCurrency {
        return new AocInterimArg_interimCharge_specificCurrency(_o.recordedCurrency, _o.interimBillingId);
    }

        /**
         * @summary The enum used as the type of the component `interimBillingId`
         * @public
         * @static
         */

    public static _enum_for_interimBillingId = _enum_for_InterimBillingId;
}

/**
 * @summary The Leading Root Component Types of AocInterimArg_interimCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocInterimArg_interimCharge_specificCurrency: $.ComponentSpec[] = [
    new $.ComponentSpec("recordedCurrency", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("interimBillingId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AocInterimArg_interimCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocInterimArg_interimCharge_specificCurrency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocInterimArg_interimCharge_specificCurrency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocInterimArg_interimCharge_specificCurrency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocInterimArg_interimCharge_specificCurrency: $.ASN1Decoder<AocInterimArg_interimCharge_specificCurrency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocInterimArg_interimCharge_specificCurrency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocInterimArg_interimCharge_specificCurrency (el: _Element): AocInterimArg_interimCharge_specificCurrency {
    if (!_cached_decoder_for_AocInterimArg_interimCharge_specificCurrency) { _cached_decoder_for_AocInterimArg_interimCharge_specificCurrency = function (el: _Element): AocInterimArg_interimCharge_specificCurrency {
    let recordedCurrency!: RecordedCurrency;
    let interimBillingId: OPTIONAL<InterimBillingId>;
    const callbacks: $.DecodingMap = {
        "recordedCurrency": (_el: _Element): void => { recordedCurrency = $._decode_implicit<RecordedCurrency>(() => _decode_RecordedCurrency)(_el); },
        "interimBillingId": (_el: _Element): void => { interimBillingId = $._decode_implicit<InterimBillingId>(() => _decode_InterimBillingId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocInterimArg_interimCharge_specificCurrency,
        _extension_additions_list_spec_for_AocInterimArg_interimCharge_specificCurrency,
        _root_component_type_list_2_spec_for_AocInterimArg_interimCharge_specificCurrency,
        undefined,
    );
    return new AocInterimArg_interimCharge_specificCurrency(
        recordedCurrency,
        interimBillingId
    );
}; }
    return _cached_decoder_for_AocInterimArg_interimCharge_specificCurrency(el);
}

let _cached_encoder_for_AocInterimArg_interimCharge_specificCurrency: $.ASN1Encoder<AocInterimArg_interimCharge_specificCurrency> | null = null;

/**
 * @summary Encodes a(n) AocInterimArg_interimCharge_specificCurrency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocInterimArg_interimCharge_specificCurrency, encoded as an ASN.1 Element.
 */
export
function _encode_AocInterimArg_interimCharge_specificCurrency (value: AocInterimArg_interimCharge_specificCurrency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocInterimArg_interimCharge_specificCurrency) { _cached_encoder_for_AocInterimArg_interimCharge_specificCurrency = function (value: AocInterimArg_interimCharge_specificCurrency, elGetter: $.ASN1Encoder<AocInterimArg_interimCharge_specificCurrency>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RecordedCurrency, $.BER)(value.recordedCurrency, $.BER));
    if (value.interimBillingId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InterimBillingId, $.BER)(value.interimBillingId, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocInterimArg_interimCharge_specificCurrency(value, elGetter);
}


/* eslint-enable */
