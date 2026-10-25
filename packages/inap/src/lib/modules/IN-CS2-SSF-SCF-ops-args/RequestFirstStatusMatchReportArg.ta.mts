/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
import { ResourceStatus, _decode_ResourceStatus, _encode_ResourceStatus, _enum_for_ResourceStatus } from "../IN-CS2-datatypes/ResourceStatus.ta.mjs";
// export { ResourceStatus, _enum_for_ResourceStatus, ResourceStatus_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceStatus_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceStatus, _encode_ResourceStatus } from "../IN-CS2-datatypes/ResourceStatus.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS2-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS2-datatypes/BearerCapability.ta.mjs";


/**
 * @summary RequestFirstStatusMatchReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestFirstStatusMatchReportArg ::= SEQUENCE {
 *   resourceID        [0]  ResourceID OPTIONAL,
 *   resourceStatus    [1]  ResourceStatus OPTIONAL,
 *   correlationID     [2]  CorrelationID OPTIONAL,
 *   monitorDuration   [3]  Duration OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   bearerCapability  [5]  BearerCapability OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestFirstStatusMatchReportArg {
    /**
     * @summary `resourceID`.
     * @public
     * @readonly
     */
    readonly resourceID: OPTIONAL<ResourceID>;
    /**
     * @summary `resourceStatus`.
     * @public
     * @readonly
     */
    readonly resourceStatus: OPTIONAL<ResourceStatus>;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `monitorDuration`.
     * @public
     * @readonly
     */
    readonly monitorDuration: OPTIONAL<Duration>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceID?: OPTIONAL<ResourceID>,
        resourceStatus?: OPTIONAL<ResourceStatus>,
        correlationID?: OPTIONAL<CorrelationID>,
        monitorDuration?: OPTIONAL<Duration>,
        extensions?: OPTIONAL<ExtensionField[]>,
        bearerCapability?: OPTIONAL<BearerCapability>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceID = resourceID;
        this.resourceStatus = resourceStatus;
        this.correlationID = correlationID;
        this.monitorDuration = monitorDuration;
        this.extensions = extensions;
        this.bearerCapability = bearerCapability;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestFirstStatusMatchReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestFirstStatusMatchReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestFirstStatusMatchReportArg`.
     * @returns {RequestFirstStatusMatchReportArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestFirstStatusMatchReportArg)]: (RequestFirstStatusMatchReportArg)[_K] }): RequestFirstStatusMatchReportArg {
        return new RequestFirstStatusMatchReportArg(_o.resourceID, _o.resourceStatus, _o.correlationID, _o.monitorDuration, _o.extensions, _o.bearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `resourceStatus`
         * @public
         * @static
         */

    public static _enum_for_resourceStatus = _enum_for_ResourceStatus;
}

/**
 * @summary The Leading Root Component Types of RequestFirstStatusMatchReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestFirstStatusMatchReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resourceStatus", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitorDuration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of RequestFirstStatusMatchReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestFirstStatusMatchReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestFirstStatusMatchReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestFirstStatusMatchReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestFirstStatusMatchReportArg: $.ASN1Decoder<RequestFirstStatusMatchReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestFirstStatusMatchReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestFirstStatusMatchReportArg (el: _Element): RequestFirstStatusMatchReportArg {
    if (!_cached_decoder_for_RequestFirstStatusMatchReportArg) { _cached_decoder_for_RequestFirstStatusMatchReportArg = function (el: _Element): RequestFirstStatusMatchReportArg {
    let resourceID: OPTIONAL<ResourceID>;
    let resourceStatus: OPTIONAL<ResourceStatus>;
    let correlationID: OPTIONAL<CorrelationID>;
    let monitorDuration: OPTIONAL<Duration>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceID": (_el: _Element): void => { resourceID = $._decode_explicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "resourceStatus": (_el: _Element): void => { resourceStatus = $._decode_implicit<ResourceStatus>(() => _decode_ResourceStatus)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "monitorDuration": (_el: _Element): void => { monitorDuration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestFirstStatusMatchReportArg,
        _extension_additions_list_spec_for_RequestFirstStatusMatchReportArg,
        _root_component_type_list_2_spec_for_RequestFirstStatusMatchReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestFirstStatusMatchReportArg(
        resourceID,
        resourceStatus,
        correlationID,
        monitorDuration,
        extensions,
        bearerCapability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestFirstStatusMatchReportArg(el);
}

let _cached_encoder_for_RequestFirstStatusMatchReportArg: $.ASN1Encoder<RequestFirstStatusMatchReportArg> | null = null;

/**
 * @summary Encodes a(n) RequestFirstStatusMatchReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestFirstStatusMatchReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestFirstStatusMatchReportArg (value: RequestFirstStatusMatchReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestFirstStatusMatchReportArg) { _cached_encoder_for_RequestFirstStatusMatchReportArg = function (value: RequestFirstStatusMatchReportArg, elGetter: $.ASN1Encoder<RequestFirstStatusMatchReportArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.resourceID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resourceID, $.BER);
    }
    if (value.resourceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ResourceStatus, $.BER)(value.resourceStatus, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.monitorDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Duration, $.BER)(value.monitorDuration, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestFirstStatusMatchReportArg(value, elGetter);
}


/* eslint-enable */
