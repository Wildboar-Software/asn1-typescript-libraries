/* eslint-disable */
import {
    OPTIONAL,
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
import { CS_GetEventConditionAttributes_Response_groupPriorityOverride, _decode_CS_GetEventConditionAttributes_Response_groupPriorityOverride, _encode_CS_GetEventConditionAttributes_Response_groupPriorityOverride } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response-groupPriorityOverride.ta.mjs";
// export { CS_GetEventConditionAttributes_Response_groupPriorityOverride, _decode_CS_GetEventConditionAttributes_Response_groupPriorityOverride, _encode_CS_GetEventConditionAttributes_Response_groupPriorityOverride } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response-groupPriorityOverride.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { CS_GetEventConditionAttributes_Response_displayEnhancement, _decode_CS_GetEventConditionAttributes_Response_displayEnhancement, _encode_CS_GetEventConditionAttributes_Response_displayEnhancement } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response-displayEnhancement.ta.mjs";
// export { CS_GetEventConditionAttributes_Response_displayEnhancement, _decode_CS_GetEventConditionAttributes_Response_displayEnhancement, _encode_CS_GetEventConditionAttributes_Response_displayEnhancement } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response-displayEnhancement.ta.mjs";


/**
 * @summary CS_GetEventConditionAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetEventConditionAttributes-Response ::= SEQUENCE {
 *    groupPriorityOverride         [0] CHOICE {
 *        priority                      [0] IMPLICIT Priority,
 *        undefined                     [1] IMPLICIT NULL   } OPTIONAL,
 *    listOfReferencingECL          [1] IMPLICIT SEQUENCE OF ObjectName OPTIONAL,
 *    displayEnhancement            [2] CHOICE {
 *        string                        [0] IMPLICIT VisibleString,
 *        index                         [1] IMPLICIT INTEGER,
 *        noEnhancement                 [2] IMPLICIT NULL   }
 *    }
 * ```
 * 
 * @class
 */
export
class CS_GetEventConditionAttributes_Response {
    constructor (
        /**
         * @summary `groupPriorityOverride`.
         * @public
         * @readonly
         */
        readonly groupPriorityOverride: OPTIONAL<CS_GetEventConditionAttributes_Response_groupPriorityOverride>,
        /**
         * @summary `listOfReferencingECL`.
         * @public
         * @readonly
         */
        readonly listOfReferencingECL: OPTIONAL<ObjectName[]>,
        /**
         * @summary `displayEnhancement`.
         * @public
         * @readonly
         */
        readonly displayEnhancement: CS_GetEventConditionAttributes_Response_displayEnhancement
    ) {}

    /**
     * @summary Restructures an object into a CS_GetEventConditionAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `CS_GetEventConditionAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_GetEventConditionAttributes_Response`.
     * @returns {CS_GetEventConditionAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (CS_GetEventConditionAttributes_Response)]: (CS_GetEventConditionAttributes_Response)[_K] }): CS_GetEventConditionAttributes_Response {
        return new CS_GetEventConditionAttributes_Response(_o.groupPriorityOverride, _o.listOfReferencingECL, _o.displayEnhancement);
    }


}

/**
 * @summary The Leading Root Component Types of CS_GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("groupPriorityOverride", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfReferencingECL", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayEnhancement", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CS_GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_GetEventConditionAttributes_Response: $.ASN1Decoder<CS_GetEventConditionAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetEventConditionAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetEventConditionAttributes_Response (el: _Element): CS_GetEventConditionAttributes_Response {
    if (!_cached_decoder_for_CS_GetEventConditionAttributes_Response) { _cached_decoder_for_CS_GetEventConditionAttributes_Response = function (el: _Element): CS_GetEventConditionAttributes_Response {
    let groupPriorityOverride: OPTIONAL<CS_GetEventConditionAttributes_Response_groupPriorityOverride>;
    let listOfReferencingECL: OPTIONAL<ObjectName[]>;
    let displayEnhancement!: CS_GetEventConditionAttributes_Response_displayEnhancement;
    const callbacks: $.DecodingMap = {
        "groupPriorityOverride": (_el: _Element): void => { groupPriorityOverride = $._decode_explicit<CS_GetEventConditionAttributes_Response_groupPriorityOverride>(() => _decode_CS_GetEventConditionAttributes_Response_groupPriorityOverride)(_el); },
        "listOfReferencingECL": (_el: _Element): void => { listOfReferencingECL = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = $._decode_explicit<CS_GetEventConditionAttributes_Response_displayEnhancement>(() => _decode_CS_GetEventConditionAttributes_Response_displayEnhancement)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CS_GetEventConditionAttributes_Response,
        _extension_additions_list_spec_for_CS_GetEventConditionAttributes_Response,
        _root_component_type_list_2_spec_for_CS_GetEventConditionAttributes_Response,
        undefined,
    );
    return new CS_GetEventConditionAttributes_Response(
        groupPriorityOverride,
        listOfReferencingECL,
        displayEnhancement
    );
}; }
    return _cached_decoder_for_CS_GetEventConditionAttributes_Response(el);
}

let _cached_encoder_for_CS_GetEventConditionAttributes_Response: $.ASN1Encoder<CS_GetEventConditionAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) CS_GetEventConditionAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetEventConditionAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetEventConditionAttributes_Response (value: CS_GetEventConditionAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetEventConditionAttributes_Response) { _cached_encoder_for_CS_GetEventConditionAttributes_Response = function (value: CS_GetEventConditionAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.groupPriorityOverride === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CS_GetEventConditionAttributes_Response_groupPriorityOverride, $.BER)(value.groupPriorityOverride, $.BER)),
            /* IF_ABSENT  */ ((value.listOfReferencingECL === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfReferencingECL, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_CS_GetEventConditionAttributes_Response_displayEnhancement, $.BER)(value.displayEnhancement, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_GetEventConditionAttributes_Response(value, elGetter);
}


/* eslint-enable */
