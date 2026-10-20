/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ACRInterimLost, _encode_ACRInterimLost, _enum_for_ACRInterimLost, ACRInterimLost } from "../IMSChargingDataTypes/ACRInterimLost.ta.mjs";
// export { ACRInterimLost, _enum_for_ACRInterimLost, ACRInterimLost_no /* IMPORTED_LONG_ENUMERATION_ITEM */, no /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRInterimLost_yes /* IMPORTED_LONG_ENUMERATION_ITEM */, yes /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACRInterimLost_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACRInterimLost, _encode_ACRInterimLost } from "../IMSChargingDataTypes/ACRInterimLost.ta.mjs";


/**
 * @summary Incomplete_CDR_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Incomplete-CDR-Indication ::= SET {
 *    aCRStartLost     [0] IMPLICIT BOOLEAN,
 *    aCRInterimLost   [1] IMPLICIT ACRInterimLost,
 *    aCRStopLost      [2] IMPLICIT BOOLEAN}
 * ```
 * 
 * @class
 */
export
class Incomplete_CDR_Indication {
    /**
     * @summary `aCRStartLost`.
     * @public
     * @readonly
     */
    readonly aCRStartLost: BOOLEAN;
    /**
     * @summary `aCRInterimLost`.
     * @public
     * @readonly
     */
    readonly aCRInterimLost: ACRInterimLost;
    /**
     * @summary `aCRStopLost`.
     * @public
     * @readonly
     */
    readonly aCRStopLost: BOOLEAN;

    constructor (
        aCRStartLost: BOOLEAN,
        aCRInterimLost: ACRInterimLost,
        aCRStopLost: BOOLEAN
    ) {
        this.aCRStartLost = aCRStartLost;
        this.aCRInterimLost = aCRInterimLost;
        this.aCRStopLost = aCRStopLost;
    }

    /**
     * @summary Restructures an object into a Incomplete_CDR_Indication
     * @description
     * 
     * This takes an `object` and converts it to a `Incomplete_CDR_Indication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Incomplete_CDR_Indication`.
     * @returns {Incomplete_CDR_Indication}
     */
    public static _from_object (_o: { [_K in keyof (Incomplete_CDR_Indication)]: (Incomplete_CDR_Indication)[_K] }): Incomplete_CDR_Indication {
        return new Incomplete_CDR_Indication(_o.aCRStartLost, _o.aCRInterimLost, _o.aCRStopLost);
    }

        /**
         * @summary The enum used as the type of the component `aCRInterimLost`
         * @public
         * @static
         */

    public static _enum_for_aCRInterimLost = _enum_for_ACRInterimLost;
}

/**
 * @summary The Leading Root Component Types of Incomplete_CDR_Indication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Incomplete_CDR_Indication: $.ComponentSpec[] = [
    new $.ComponentSpec("aCRStartLost", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aCRInterimLost", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCRStopLost", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Incomplete_CDR_Indication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Incomplete_CDR_Indication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Incomplete_CDR_Indication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Incomplete_CDR_Indication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Incomplete_CDR_Indication: $.ASN1Decoder<Incomplete_CDR_Indication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Incomplete_CDR_Indication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Incomplete_CDR_Indication (el: _Element): Incomplete_CDR_Indication {
    if (!_cached_decoder_for_Incomplete_CDR_Indication) { _cached_decoder_for_Incomplete_CDR_Indication = function (el: _Element): Incomplete_CDR_Indication {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let aCRStartLost!: BOOLEAN;
    let aCRInterimLost!: ACRInterimLost;
    let aCRStopLost!: BOOLEAN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "aCRStartLost": (_el: _Element): void => { aCRStartLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "aCRInterimLost": (_el: _Element): void => { aCRInterimLost = $._decode_implicit<ACRInterimLost>(() => _decode_ACRInterimLost)(_el); },
        "aCRStopLost": (_el: _Element): void => { aCRStopLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Incomplete_CDR_Indication,
        _extension_additions_list_spec_for_Incomplete_CDR_Indication,
        _root_component_type_list_2_spec_for_Incomplete_CDR_Indication,
        undefined,
    );
    return new Incomplete_CDR_Indication( /* SET_CONSTRUCTOR_CALL */
        aCRStartLost,
        aCRInterimLost,
        aCRStopLost
    );
}; }
    return _cached_decoder_for_Incomplete_CDR_Indication(el);
}

let _cached_encoder_for_Incomplete_CDR_Indication: $.ASN1Encoder<Incomplete_CDR_Indication> | null = null;

/**
 * @summary Encodes a(n) Incomplete_CDR_Indication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Incomplete_CDR_Indication, encoded as an ASN.1 Element.
 */
export
function _encode_Incomplete_CDR_Indication (value: Incomplete_CDR_Indication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Incomplete_CDR_Indication) { _cached_encoder_for_Incomplete_CDR_Indication = function (value: Incomplete_CDR_Indication, elGetter: $.ASN1Encoder<Incomplete_CDR_Indication>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.aCRStartLost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ACRInterimLost, $.BER)(value.aCRInterimLost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.aCRStopLost, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Incomplete_CDR_Indication(value, elGetter);
}


/* eslint-enable */
