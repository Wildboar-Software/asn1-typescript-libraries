/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OperationsMonitoredItemID, _decode_OperationsMonitoredItemID, _encode_OperationsMonitoredItemID } from "../AIN-Parameters/OperationsMonitoredItemID.ta.mjs";
// export { OperationsMonitoredItemID, _decode_OperationsMonitoredItemID, _encode_OperationsMonitoredItemID } from "../AIN-Parameters/OperationsMonitoredItemID.ta.mjs";
import { ActivationStateCode, _decode_ActivationStateCode, _encode_ActivationStateCode, _enum_for_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";


/**
 * @summary OperationsMonitoringAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationsMonitoringAssignment ::= [118] IMPLICIT SEQUENCE{
 *         operationsMonitoredItemID OperationsMonitoredItemID,
 *         activationStateCode [3] IMPLICIT ActivationStateCode OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class OperationsMonitoringAssignment {
    constructor (
        /**
         * @summary `operationsMonitoredItemID`.
         * @public
         * @readonly
         */
        readonly operationsMonitoredItemID: OperationsMonitoredItemID,
        /**
         * @summary `activationStateCode`.
         * @public
         * @readonly
         */
        readonly activationStateCode: OPTIONAL<ActivationStateCode>
    ) {}

    /**
     * @summary Restructures an object into a OperationsMonitoringAssignment
     * @description
     * 
     * This takes an `object` and converts it to a `OperationsMonitoringAssignment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationsMonitoringAssignment`.
     * @returns {OperationsMonitoringAssignment}
     */
    public static _from_object (_o: { [_K in keyof (OperationsMonitoringAssignment)]: (OperationsMonitoringAssignment)[_K] }): OperationsMonitoringAssignment {
        return new OperationsMonitoringAssignment(_o.operationsMonitoredItemID, _o.activationStateCode);
    }

        /**
         * @summary The enum used as the type of the component `activationStateCode`
         * @public
         * @static
         */

    public static _enum_for_activationStateCode = _enum_for_ActivationStateCode;
}

/**
 * @summary The Leading Root Component Types of OperationsMonitoringAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OperationsMonitoringAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec("operationsMonitoredItemID", false, $.hasAnyTag),
    new $.ComponentSpec("activationStateCode", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of OperationsMonitoringAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OperationsMonitoringAssignment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OperationsMonitoringAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OperationsMonitoringAssignment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OperationsMonitoringAssignment: $.ASN1Decoder<OperationsMonitoringAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationsMonitoringAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperationsMonitoringAssignment (el: _Element): OperationsMonitoringAssignment {
    if (!_cached_decoder_for_OperationsMonitoringAssignment) { _cached_decoder_for_OperationsMonitoringAssignment = $._decode_implicit<OperationsMonitoringAssignment>(() => function (el: _Element): OperationsMonitoringAssignment {
    let operationsMonitoredItemID!: OperationsMonitoredItemID;
    let activationStateCode: OPTIONAL<ActivationStateCode>;
    const callbacks: $.DecodingMap = {
        "operationsMonitoredItemID": (_el: _Element): void => { operationsMonitoredItemID = _decode_OperationsMonitoredItemID(_el); },
        "activationStateCode": (_el: _Element): void => { activationStateCode = $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OperationsMonitoringAssignment,
        _extension_additions_list_spec_for_OperationsMonitoringAssignment,
        _root_component_type_list_2_spec_for_OperationsMonitoringAssignment,
        undefined,
    );
    return new OperationsMonitoringAssignment(
        operationsMonitoredItemID,
        activationStateCode
    );
}); }
    return _cached_decoder_for_OperationsMonitoringAssignment(el);
}

let _cached_encoder_for_OperationsMonitoringAssignment: $.ASN1Encoder<OperationsMonitoringAssignment> | null = null;

/**
 * @summary Encodes a(n) OperationsMonitoringAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationsMonitoringAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_OperationsMonitoringAssignment (value: OperationsMonitoringAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperationsMonitoringAssignment) { _cached_encoder_for_OperationsMonitoringAssignment = $._encode_implicit(_TagClass.context, 118, () => function (value: OperationsMonitoringAssignment, elGetter: $.ASN1Encoder<OperationsMonitoringAssignment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_OperationsMonitoredItemID(value.operationsMonitoredItemID, $.BER),
            /* IF_ABSENT  */ ((value.activationStateCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ActivationStateCode, $.BER)(value.activationStateCode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_OperationsMonitoringAssignment(value, elGetter);
}


/* eslint-enable */
