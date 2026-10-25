/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BCSMEvent, _decode_BCSMEvent, _encode_BCSMEvent } from "../IN-CS2-datatypes/BCSMEvent.ta.mjs";
// export { BCSMEvent, _decode_BCSMEvent, _encode_BCSMEvent } from "../IN-CS2-datatypes/BCSMEvent.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary RequestReportBCSMEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportBCSMEventArg ::= SEQUENCE {
 *   bcsmEvents
 *     [0]  SEQUENCE OF BCSMEvent,
 *   bcsmEventCorrelationID  [1]  CorrelationID OPTIONAL,
 *   extensions
 *     [2]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestReportBCSMEventArg {
    /**
     * @summary `bcsmEvents`.
     * @public
     * @readonly
     */
    readonly bcsmEvents: BCSMEvent[];
    /**
     * @summary `bcsmEventCorrelationID`.
     * @public
     * @readonly
     */
    readonly bcsmEventCorrelationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        bcsmEvents: BCSMEvent[],
        bcsmEventCorrelationID?: OPTIONAL<CorrelationID>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.bcsmEvents = bcsmEvents;
        this.bcsmEventCorrelationID = bcsmEventCorrelationID;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestReportBCSMEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportBCSMEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportBCSMEventArg`.
     * @returns {RequestReportBCSMEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportBCSMEventArg)]: (RequestReportBCSMEventArg)[_K] }): RequestReportBCSMEventArg {
        return new RequestReportBCSMEventArg(_o.bcsmEvents, _o.bcsmEventCorrelationID, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("bcsmEvents", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bcsmEventCorrelationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportBCSMEventArg: $.ASN1Decoder<RequestReportBCSMEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportBCSMEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportBCSMEventArg (el: _Element): RequestReportBCSMEventArg {
    if (!_cached_decoder_for_RequestReportBCSMEventArg) { _cached_decoder_for_RequestReportBCSMEventArg = function (el: _Element): RequestReportBCSMEventArg {
    let bcsmEvents!: BCSMEvent[];
    let bcsmEventCorrelationID: OPTIONAL<CorrelationID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "bcsmEvents": (_el: _Element): void => { bcsmEvents = $._decode_implicit<BCSMEvent[]>(() => $._decodeSequenceOf<BCSMEvent>(() => _decode_BCSMEvent))(_el); },
        "bcsmEventCorrelationID": (_el: _Element): void => { bcsmEventCorrelationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportBCSMEventArg,
        _extension_additions_list_spec_for_RequestReportBCSMEventArg,
        _root_component_type_list_2_spec_for_RequestReportBCSMEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportBCSMEventArg(
        bcsmEvents,
        bcsmEventCorrelationID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportBCSMEventArg(el);
}

let _cached_encoder_for_RequestReportBCSMEventArg: $.ASN1Encoder<RequestReportBCSMEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportBCSMEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportBCSMEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportBCSMEventArg (value: RequestReportBCSMEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportBCSMEventArg) { _cached_encoder_for_RequestReportBCSMEventArg = function (value: RequestReportBCSMEventArg, elGetter: $.ASN1Encoder<RequestReportBCSMEventArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<BCSMEvent>(() => _encode_BCSMEvent, $.BER), $.BER)(value.bcsmEvents, $.BER);
    if (value.bcsmEventCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.bcsmEventCorrelationID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestReportBCSMEventArg(value, elGetter);
}


/* eslint-enable */
