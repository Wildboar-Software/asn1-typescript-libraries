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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
// export { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
// export { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
import { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";
// export { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";


/**
 * @summary DefineEventAction_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineEventAction-Request ::= SEQUENCE {
 *    eventActionName               [0] ObjectName,
 *    listOfModifier                [1] IMPLICIT SEQUENCE OF Modifier OPTIONAL,
 *    confirmedServiceRequest       [2] ConfirmedServiceRequest
 * ,  cs-extension                  [79] Request-Detail OPTIONAL
 *                  -- shall not be transmitted if value is the value
 *                  -- of a tagged type derived from NULL
 *    }
 * ```
 * 
 * @class
 */
export
class DefineEventAction_Request {
    constructor (
        /**
         * @summary `eventActionName`.
         * @public
         * @readonly
         */
        readonly eventActionName: ObjectName,
        /**
         * @summary `listOfModifier`.
         * @public
         * @readonly
         */
        readonly listOfModifier: OPTIONAL<Modifier[]>,
        /**
         * @summary `confirmedServiceRequest`.
         * @public
         * @readonly
         */
        readonly confirmedServiceRequest: ConfirmedServiceRequest,
        /**
         * @summary `cs_extension`.
         * @public
         * @readonly
         */
        readonly cs_extension: OPTIONAL<Request_Detail>
    ) {}

    /**
     * @summary Restructures an object into a DefineEventAction_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineEventAction_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineEventAction_Request`.
     * @returns {DefineEventAction_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineEventAction_Request)]: (DefineEventAction_Request)[_K] }): DefineEventAction_Request {
        return new DefineEventAction_Request(_o.eventActionName, _o.listOfModifier, _o.confirmedServiceRequest, _o.cs_extension);
    }


}

/**
 * @summary The Leading Root Component Types of DefineEventAction_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineEventAction_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventActionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfModifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("confirmedServiceRequest", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cs-extension", true, $.hasTag(_TagClass.context, 79))
];

/**
 * @summary The Trailing Root Component Types of DefineEventAction_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineEventAction_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineEventAction_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineEventAction_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineEventAction_Request: $.ASN1Decoder<DefineEventAction_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineEventAction_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineEventAction_Request (el: _Element): DefineEventAction_Request {
    if (!_cached_decoder_for_DefineEventAction_Request) { _cached_decoder_for_DefineEventAction_Request = function (el: _Element): DefineEventAction_Request {
    let eventActionName!: ObjectName;
    let listOfModifier: OPTIONAL<Modifier[]>;
    let confirmedServiceRequest!: ConfirmedServiceRequest;
    let cs_extension: OPTIONAL<Request_Detail>;
    const callbacks: $.DecodingMap = {
        "eventActionName": (_el: _Element): void => { eventActionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "listOfModifier": (_el: _Element): void => { listOfModifier = $._decode_implicit<Modifier[]>(() => $._decodeSequenceOf<Modifier>(() => _decode_Modifier))(_el); },
        "confirmedServiceRequest": (_el: _Element): void => { confirmedServiceRequest = $._decode_explicit<ConfirmedServiceRequest>(() => _decode_ConfirmedServiceRequest)(_el); },
        "cs-extension": (_el: _Element): void => { cs_extension = $._decode_explicit<Request_Detail>(() => _decode_Request_Detail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineEventAction_Request,
        _extension_additions_list_spec_for_DefineEventAction_Request,
        _root_component_type_list_2_spec_for_DefineEventAction_Request,
        undefined,
    );
    return new DefineEventAction_Request(
        eventActionName,
        listOfModifier,
        confirmedServiceRequest,
        cs_extension
    );
}; }
    return _cached_decoder_for_DefineEventAction_Request(el);
}

let _cached_encoder_for_DefineEventAction_Request: $.ASN1Encoder<DefineEventAction_Request> | null = null;

/**
 * @summary Encodes a(n) DefineEventAction_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineEventAction_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineEventAction_Request (value: DefineEventAction_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineEventAction_Request) { _cached_encoder_for_DefineEventAction_Request = function (value: DefineEventAction_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventActionName, $.BER),
            /* IF_ABSENT  */ ((value.listOfModifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Modifier>(() => _encode_Modifier, $.BER), $.BER)(value.listOfModifier, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ConfirmedServiceRequest, $.BER)(value.confirmedServiceRequest, $.BER),
            /* IF_ABSENT  */ ((value.cs_extension === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Request_Detail, $.BER)(value.cs_extension, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineEventAction_Request(value, elGetter);
}


/* eslint-enable */
