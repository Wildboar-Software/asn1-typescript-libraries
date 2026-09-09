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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { SMSEvent, _decode_SMSEvent, _encode_SMSEvent } from "../CAP-datatypes/SMSEvent.ta.mjs";



/**
 * @summary RequestReportSMSEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportSMSEventArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     sMSEvents                [0] SEQUENCE SIZE (1..bound.&numOfSMSEvents) OF SMSEvent,
 *     extensions                [10] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class RequestReportSMSEventArg {
    constructor (
        /**
         * @summary `sMSEvents`.
         * @public
         * @readonly
         */
        readonly sMSEvents: SMSEvent[],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestReportSMSEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportSMSEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportSMSEventArg`.
     * @returns {RequestReportSMSEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportSMSEventArg)]: (RequestReportSMSEventArg)[_K] }): RequestReportSMSEventArg {
        return new RequestReportSMSEventArg(_o.sMSEvents, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestReportSMSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportSMSEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sMSEvents", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of RequestReportSMSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportSMSEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportSMSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportSMSEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportSMSEventArg: $.ASN1Decoder<RequestReportSMSEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportSMSEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportSMSEventArg (el: _Element): RequestReportSMSEventArg {
    if (!_cached_decoder_for_RequestReportSMSEventArg) { _cached_decoder_for_RequestReportSMSEventArg = function (el: _Element): RequestReportSMSEventArg {
    let sMSEvents!: SMSEvent[];
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sMSEvents": (_el: _Element): void => { sMSEvents = $._decode_implicit<SMSEvent[]>(() => $._decodeSequenceOf<SMSEvent>(() => _decode_SMSEvent))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportSMSEventArg,
        _extension_additions_list_spec_for_RequestReportSMSEventArg,
        _root_component_type_list_2_spec_for_RequestReportSMSEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportSMSEventArg(
        sMSEvents,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportSMSEventArg(el);
}

let _cached_encoder_for_RequestReportSMSEventArg: $.ASN1Encoder<RequestReportSMSEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportSMSEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportSMSEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportSMSEventArg (value: RequestReportSMSEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportSMSEventArg) { _cached_encoder_for_RequestReportSMSEventArg = function (value: RequestReportSMSEventArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<SMSEvent>(() => _encode_SMSEvent, $.BER), $.BER)(value.sMSEvents, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestReportSMSEventArg(value, elGetter);
}


/* eslint-enable */
