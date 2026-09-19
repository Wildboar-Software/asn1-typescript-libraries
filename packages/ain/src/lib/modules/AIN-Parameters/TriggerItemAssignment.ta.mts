/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
// export { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
import { TriggerItemID, _decode_TriggerItemID, _encode_TriggerItemID } from "../AIN-Parameters/TriggerItemID.ta.mjs";
// export { TriggerItemID, _decode_TriggerItemID, _encode_TriggerItemID } from "../AIN-Parameters/TriggerItemID.ta.mjs";
import { ActivationStateCode, _decode_ActivationStateCode, _encode_ActivationStateCode, _enum_for_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
import { PotentialUse, _decode_PotentialUse, _encode_PotentialUse, _enum_for_PotentialUse } from "../AIN-Parameters/PotentialUse.ta.mjs";
// export { PotentialUse, _enum_for_PotentialUse, PotentialUse_notApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, notApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, PotentialUse_callForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PotentialUse, _encode_PotentialUse } from "../AIN-Parameters/PotentialUse.ta.mjs";
import { SSPUserResourceSubID, _decode_SSPUserResourceSubID, _encode_SSPUserResourceSubID } from "../AIN-Parameters/SSPUserResourceSubID.ta.mjs";
// export { SSPUserResourceSubID, _decode_SSPUserResourceSubID, _encode_SSPUserResourceSubID } from "../AIN-Parameters/SSPUserResourceSubID.ta.mjs";


/**
 * @summary TriggerItemAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerItemAssignment ::= [102] IMPLICIT SEQUENCE{
 *         sSPUserResourceID       [1] SSPUserResourceID,
 *         triggerItemID           [2] IMPLICIT TriggerItemID,
 *         activationStateCode     [3] IMPLICIT ActivationStateCode OPTIONAL,
 *         potentialUse            [4] IMPLICIT PotentialUse OPTIONAL,
 *         sSPUserResourceSubID    [5] SSPUserResourceSubID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class TriggerItemAssignment {
    constructor (
        /**
         * @summary `sSPUserResourceID`.
         * @public
         * @readonly
         */
        readonly sSPUserResourceID: SSPUserResourceID,
        /**
         * @summary `triggerItemID`.
         * @public
         * @readonly
         */
        readonly triggerItemID: TriggerItemID,
        /**
         * @summary `activationStateCode`.
         * @public
         * @readonly
         */
        readonly activationStateCode: OPTIONAL<ActivationStateCode>,
        /**
         * @summary `potentialUse`.
         * @public
         * @readonly
         */
        readonly potentialUse: OPTIONAL<PotentialUse>,
        /**
         * @summary `sSPUserResourceSubID`.
         * @public
         * @readonly
         */
        readonly sSPUserResourceSubID: OPTIONAL<SSPUserResourceSubID>
    ) {}

    /**
     * @summary Restructures an object into a TriggerItemAssignment
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerItemAssignment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerItemAssignment`.
     * @returns {TriggerItemAssignment}
     */
    public static _from_object (_o: { [_K in keyof (TriggerItemAssignment)]: (TriggerItemAssignment)[_K] }): TriggerItemAssignment {
        return new TriggerItemAssignment(_o.sSPUserResourceID, _o.triggerItemID, _o.activationStateCode, _o.potentialUse, _o.sSPUserResourceSubID);
    }

        /**
         * @summary The enum used as the type of the component `activationStateCode`
         * @public
         * @static
         */

    public static _enum_for_activationStateCode = _enum_for_ActivationStateCode;        /**
         * @summary The enum used as the type of the component `potentialUse`
         * @public
         * @static
         */

    public static _enum_for_potentialUse = _enum_for_PotentialUse;
}

/**
 * @summary The Leading Root Component Types of TriggerItemAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerItemAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec("sSPUserResourceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerItemID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("activationStateCode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("potentialUse", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sSPUserResourceSubID", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TriggerItemAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerItemAssignment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerItemAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerItemAssignment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerItemAssignment: $.ASN1Decoder<TriggerItemAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerItemAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerItemAssignment (el: _Element): TriggerItemAssignment {
    if (!_cached_decoder_for_TriggerItemAssignment) { _cached_decoder_for_TriggerItemAssignment = $._decode_implicit<TriggerItemAssignment>(() => function (el: _Element): TriggerItemAssignment {
    let sSPUserResourceID!: SSPUserResourceID;
    let triggerItemID!: TriggerItemID;
    let activationStateCode: OPTIONAL<ActivationStateCode>;
    let potentialUse: OPTIONAL<PotentialUse>;
    let sSPUserResourceSubID: OPTIONAL<SSPUserResourceSubID>;
    const callbacks: $.DecodingMap = {
        "sSPUserResourceID": (_el: _Element): void => { sSPUserResourceID = $._decode_explicit<SSPUserResourceID>(() => _decode_SSPUserResourceID)(_el); },
        "triggerItemID": (_el: _Element): void => { triggerItemID = $._decode_implicit<TriggerItemID>(() => _decode_TriggerItemID)(_el); },
        "activationStateCode": (_el: _Element): void => { activationStateCode = $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode)(_el); },
        "potentialUse": (_el: _Element): void => { potentialUse = $._decode_implicit<PotentialUse>(() => _decode_PotentialUse)(_el); },
        "sSPUserResourceSubID": (_el: _Element): void => { sSPUserResourceSubID = $._decode_explicit<SSPUserResourceSubID>(() => _decode_SSPUserResourceSubID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerItemAssignment,
        _extension_additions_list_spec_for_TriggerItemAssignment,
        _root_component_type_list_2_spec_for_TriggerItemAssignment,
        undefined,
    );
    return new TriggerItemAssignment(
        sSPUserResourceID,
        triggerItemID,
        activationStateCode,
        potentialUse,
        sSPUserResourceSubID
    );
}); }
    return _cached_decoder_for_TriggerItemAssignment(el);
}

let _cached_encoder_for_TriggerItemAssignment: $.ASN1Encoder<TriggerItemAssignment> | null = null;

/**
 * @summary Encodes a(n) TriggerItemAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerItemAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerItemAssignment (value: TriggerItemAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerItemAssignment) { _cached_encoder_for_TriggerItemAssignment = $._encode_implicit(_TagClass.context, 102, () => function (value: TriggerItemAssignment, elGetter: $.ASN1Encoder<TriggerItemAssignment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SSPUserResourceID, $.BER)(value.sSPUserResourceID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TriggerItemID, $.BER)(value.triggerItemID, $.BER),
            /* IF_ABSENT  */ ((value.activationStateCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ActivationStateCode, $.BER)(value.activationStateCode, $.BER)),
            /* IF_ABSENT  */ ((value.potentialUse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PotentialUse, $.BER)(value.potentialUse, $.BER)),
            /* IF_ABSENT  */ ((value.sSPUserResourceSubID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_SSPUserResourceSubID, $.BER)(value.sSPUserResourceSubID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_TriggerItemAssignment(value, elGetter);
}


/* eslint-enable */
