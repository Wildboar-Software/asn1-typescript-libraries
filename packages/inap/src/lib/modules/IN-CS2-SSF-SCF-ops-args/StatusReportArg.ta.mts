/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResourceStatus, _decode_ResourceStatus, _encode_ResourceStatus, _enum_for_ResourceStatus } from "../IN-CS2-datatypes/ResourceStatus.ta.mjs";
// export { ResourceStatus, _enum_for_ResourceStatus, ResourceStatus_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceStatus_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceStatus, _encode_ResourceStatus } from "../IN-CS2-datatypes/ResourceStatus.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { ReportCondition, _decode_ReportCondition, _encode_ReportCondition, _enum_for_ReportCondition } from "../IN-CS2-datatypes/ReportCondition.ta.mjs";
// export { ReportCondition, _enum_for_ReportCondition, ReportCondition_statusReport /* IMPORTED_LONG_ENUMERATION_ITEM */, statusReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportCondition_timerExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, timerExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportCondition_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportCondition, _encode_ReportCondition } from "../IN-CS2-datatypes/ReportCondition.ta.mjs";


/**
 * @summary StatusReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReportArg ::= SEQUENCE {
 *   resourceStatus   [0]  ResourceStatus OPTIONAL,
 *   correlationID    [1]  CorrelationID OPTIONAL,
 *   resourceID       [2]  ResourceID OPTIONAL,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   reportCondition  [4]  ReportCondition OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class StatusReportArg {
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
     * @summary `resourceID`.
     * @public
     * @readonly
     */
    readonly resourceID: OPTIONAL<ResourceID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `reportCondition`.
     * @public
     * @readonly
     */
    readonly reportCondition: OPTIONAL<ReportCondition>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceStatus?: OPTIONAL<ResourceStatus>,
        correlationID?: OPTIONAL<CorrelationID>,
        resourceID?: OPTIONAL<ResourceID>,
        extensions?: OPTIONAL<ExtensionField[]>,
        reportCondition?: OPTIONAL<ReportCondition>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceStatus = resourceStatus;
        this.correlationID = correlationID;
        this.resourceID = resourceID;
        this.extensions = extensions;
        this.reportCondition = reportCondition;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a StatusReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `StatusReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatusReportArg`.
     * @returns {StatusReportArg}
     */
    public static _from_object (_o: { [_K in keyof (StatusReportArg)]: (StatusReportArg)[_K] }): StatusReportArg {
        return new StatusReportArg(_o.resourceStatus, _o.correlationID, _o.resourceID, _o.extensions, _o.reportCondition, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `resourceStatus`
         * @public
         * @static
         */

    public static _enum_for_resourceStatus = _enum_for_ResourceStatus;        /**
         * @summary The enum used as the type of the component `reportCondition`
         * @public
         * @static
         */

    public static _enum_for_reportCondition = _enum_for_ReportCondition;
}

/**
 * @summary The Leading Root Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatusReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceStatus", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("resourceID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reportCondition", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatusReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatusReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatusReportArg: $.ASN1Decoder<StatusReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReportArg (el: _Element): StatusReportArg {
    if (!_cached_decoder_for_StatusReportArg) { _cached_decoder_for_StatusReportArg = function (el: _Element): StatusReportArg {
    let resourceStatus: OPTIONAL<ResourceStatus>;
    let correlationID: OPTIONAL<CorrelationID>;
    let resourceID: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let reportCondition: OPTIONAL<ReportCondition>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceStatus": (_el: _Element): void => { resourceStatus = $._decode_implicit<ResourceStatus>(() => _decode_ResourceStatus)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "resourceID": (_el: _Element): void => { resourceID = $._decode_explicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "reportCondition": (_el: _Element): void => { reportCondition = $._decode_implicit<ReportCondition>(() => _decode_ReportCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatusReportArg,
        _extension_additions_list_spec_for_StatusReportArg,
        _root_component_type_list_2_spec_for_StatusReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StatusReportArg(
        resourceStatus,
        correlationID,
        resourceID,
        extensions,
        reportCondition,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StatusReportArg(el);
}

let _cached_encoder_for_StatusReportArg: $.ASN1Encoder<StatusReportArg> | null = null;

/**
 * @summary Encodes a(n) StatusReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReportArg (value: StatusReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReportArg) { _cached_encoder_for_StatusReportArg = function (value: StatusReportArg, elGetter: $.ASN1Encoder<StatusReportArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.resourceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceStatus, $.BER)(value.resourceStatus, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.resourceID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_ResourceID, $.BER)(value.resourceID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.reportCondition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ReportCondition, $.BER)(value.reportCondition, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_StatusReportArg(value, elGetter);
}


/* eslint-enable */
