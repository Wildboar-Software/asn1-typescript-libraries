/* eslint-disable */
import {
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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { Operator_Station_instance_definition_details_stationType, _enum_for_Operator_Station_instance_definition_details_stationType, _decode_Operator_Station_instance_definition_details_stationType, _encode_Operator_Station_instance_definition_details_stationType } from "../MMS-SCI-Module-1/Operator-Station-instance-definition-details-stationType.ta.mjs";
// export { Operator_Station_instance_definition_details_stationType, _enum_for_Operator_Station_instance_definition_details_stationType, Operator_Station_instance_definition_details_stationType_entry /* IMPORTED_LONG_ENUMERATION_ITEM */, entry /* IMPORTED_SHORT_ENUMERATION_ITEM */, Operator_Station_instance_definition_details_stationType_display /* IMPORTED_LONG_ENUMERATION_ITEM */, display /* IMPORTED_SHORT_ENUMERATION_ITEM */, Operator_Station_instance_definition_details_stationType_entry_display /* IMPORTED_LONG_ENUMERATION_ITEM */, entry_display /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Operator_Station_instance_definition_details_stationType, _encode_Operator_Station_instance_definition_details_stationType } from "../MMS-SCI-Module-1/Operator-Station-instance-definition-details-stationType.ta.mjs";


/**
 * @summary Operator_Station_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     stationType [4] IMPLICIT ENUMERATED {
 *         entry,
 *         display,
 *         entry-display
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class Operator_Station_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `stationType`.
         * @public
         * @readonly
         */
        readonly stationType: Operator_Station_instance_definition_details_stationType
    ) {}

    /**
     * @summary Restructures an object into a Operator_Station_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Operator_Station_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Operator_Station_instance_definition_details`.
     * @returns {Operator_Station_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Operator_Station_instance_definition_details)]: (Operator_Station_instance_definition_details)[_K] }): Operator_Station_instance_definition_details {
        return new Operator_Station_instance_definition_details(_o.accessControl, _o.stationType);
    }

        /**
         * @summary The enum used as the type of the component `stationType`
         * @public
         * @static
         */

    public static _enum_for_stationType = _enum_for_Operator_Station_instance_definition_details_stationType;
}

/**
 * @summary The Leading Root Component Types of Operator_Station_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Operator_Station_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("stationType", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Operator_Station_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Operator_Station_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Operator_Station_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Operator_Station_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Operator_Station_instance_definition_details: $.ASN1Decoder<Operator_Station_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operator_Station_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operator_Station_instance_definition_details (el: _Element): Operator_Station_instance_definition_details {
    if (!_cached_decoder_for_Operator_Station_instance_definition_details) { _cached_decoder_for_Operator_Station_instance_definition_details = function (el: _Element): Operator_Station_instance_definition_details {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Operator-Station-instance-definition-details contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControl";
    sequence[1].name = "stationType";
    let accessControl!: Access_Control_List_instance;
    let stationType!: Operator_Station_instance_definition_details_stationType;
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[0]);
    stationType = $._decode_implicit<Operator_Station_instance_definition_details_stationType>(() => _decode_Operator_Station_instance_definition_details_stationType)(sequence[1]);
    return new Operator_Station_instance_definition_details(
        accessControl,
        stationType,

    );
}; }
    return _cached_decoder_for_Operator_Station_instance_definition_details(el);
}

let _cached_encoder_for_Operator_Station_instance_definition_details: $.ASN1Encoder<Operator_Station_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Operator_Station_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operator_Station_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Operator_Station_instance_definition_details (value: Operator_Station_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operator_Station_instance_definition_details) { _cached_encoder_for_Operator_Station_instance_definition_details = function (value: Operator_Station_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Operator_Station_instance_definition_details_stationType, $.BER)(value.stationType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Operator_Station_instance_definition_details(value, elGetter);
}


/* eslint-enable */
