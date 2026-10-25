/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResourceStatus, _decode_ResourceStatus, _encode_ResourceStatus, _enum_for_ResourceStatus } from "../IN-CS-1-Datatypes/ResourceStatus.ta.mjs";
// export { ResourceStatus, _enum_for_ResourceStatus, ResourceStatus_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceStatus_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceStatus, _encode_ResourceStatus } from "../IN-CS-1-Datatypes/ResourceStatus.ta.mjs";
import { type ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS-1-Datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS-1-Datatypes/ResourceID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary RequestCurrentStatusReportResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestCurrentStatusReportResultArg ::= SEQUENCE {
 *   resourceStatus  [0]  ResourceStatus,
 *   resourceID      [1]  ResourceID OPTIONAL,
 *   extensions
 *     [2]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestCurrentStatusReportResultArg {
    /**
     * @summary `resourceStatus`.
     * @public
     * @readonly
     */
    readonly resourceStatus: ResourceStatus;
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
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceStatus: ResourceStatus,
        resourceID: OPTIONAL<ResourceID>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceStatus = resourceStatus;
        this.resourceID = resourceID;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestCurrentStatusReportResultArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestCurrentStatusReportResultArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestCurrentStatusReportResultArg`.
     * @returns {RequestCurrentStatusReportResultArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestCurrentStatusReportResultArg)]: (RequestCurrentStatusReportResultArg)[_K] }): RequestCurrentStatusReportResultArg {
        return new RequestCurrentStatusReportResultArg(_o.resourceStatus, _o.resourceID, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `resourceStatus`
         * @public
         * @static
         */

    public static _enum_for_resourceStatus = _enum_for_ResourceStatus;
}

/**
 * @summary The Leading Root Component Types of RequestCurrentStatusReportResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestCurrentStatusReportResultArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resourceID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestCurrentStatusReportResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestCurrentStatusReportResultArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestCurrentStatusReportResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestCurrentStatusReportResultArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestCurrentStatusReportResultArg: $.ASN1Decoder<RequestCurrentStatusReportResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestCurrentStatusReportResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestCurrentStatusReportResultArg (el: _Element): RequestCurrentStatusReportResultArg {
    if (!_cached_decoder_for_RequestCurrentStatusReportResultArg) { _cached_decoder_for_RequestCurrentStatusReportResultArg = function (el: _Element): RequestCurrentStatusReportResultArg {
    let resourceStatus!: ResourceStatus;
    let resourceID: OPTIONAL<ResourceID>;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceStatus": (_el: _Element): void => { resourceStatus = $._decode_implicit<ResourceStatus>(() => _decode_ResourceStatus)(_el); },
        "resourceID": (_el: _Element): void => { resourceID = $._decode_explicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestCurrentStatusReportResultArg,
        _extension_additions_list_spec_for_RequestCurrentStatusReportResultArg,
        _root_component_type_list_2_spec_for_RequestCurrentStatusReportResultArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestCurrentStatusReportResultArg(
        resourceStatus,
        resourceID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestCurrentStatusReportResultArg(el);
}

let _cached_encoder_for_RequestCurrentStatusReportResultArg: $.ASN1Encoder<RequestCurrentStatusReportResultArg> | null = null;

/**
 * @summary Encodes a(n) RequestCurrentStatusReportResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestCurrentStatusReportResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestCurrentStatusReportResultArg (value: RequestCurrentStatusReportResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestCurrentStatusReportResultArg) { _cached_encoder_for_RequestCurrentStatusReportResultArg = function (value: RequestCurrentStatusReportResultArg, elGetter: $.ASN1Encoder<RequestCurrentStatusReportResultArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceStatus, $.BER)(value.resourceStatus, $.BER);
    if (value.resourceID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ResourceID, $.BER)(value.resourceID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestCurrentStatusReportResultArg(value, elGetter);
}


/* eslint-enable */
