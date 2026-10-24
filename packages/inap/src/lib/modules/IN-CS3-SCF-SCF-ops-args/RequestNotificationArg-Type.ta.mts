/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedNotifications, _decode_RequestedNotifications, _encode_RequestedNotifications } from "../IN-CS3-SCF-SCF-datatypes/RequestedNotifications.ta.mjs";
// export { RequestedNotifications, _decode_RequestedNotifications, _encode_RequestedNotifications } from "../IN-CS3-SCF-SCF-datatypes/RequestedNotifications.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary RequestNotificationArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestNotificationArg-Type ::=
 * SEQUENCE {
 *   requestedNotifications [0] RequestedNotifications,
 *   securityParameters [1] SecurityParameters OPTIONAL,
 *   ...,
 *   ...,
 *   extensions [30] Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RequestNotificationArg_Type {
    /**
     * @summary `requestedNotifications`.
     * @public
     * @readonly
     */
    readonly requestedNotifications: RequestedNotifications;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        requestedNotifications: RequestedNotifications,
        securityParameters?: OPTIONAL<SecurityParameters>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.requestedNotifications = requestedNotifications;
        this.securityParameters = securityParameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a RequestNotificationArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `RequestNotificationArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestNotificationArg_Type`.
     * @returns {RequestNotificationArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (RequestNotificationArg_Type)]: (RequestNotificationArg_Type)[_K] }): RequestNotificationArg_Type {
        return new RequestNotificationArg_Type(_o.requestedNotifications, _o.securityParameters, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RequestNotificationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestNotificationArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedNotifications", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RequestNotificationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestNotificationArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of RequestNotificationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestNotificationArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestNotificationArg_Type: $.ASN1Decoder<RequestNotificationArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestNotificationArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestNotificationArg_Type (el: _Element): RequestNotificationArg_Type {
    if (!_cached_decoder_for_RequestNotificationArg_Type) { _cached_decoder_for_RequestNotificationArg_Type = function (el: _Element): RequestNotificationArg_Type {
    let requestedNotifications!: RequestedNotifications;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "requestedNotifications": (_el: _Element): void => { requestedNotifications = $._decode_implicit<RequestedNotifications>(() => _decode_RequestedNotifications)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestNotificationArg_Type,
        _extension_additions_list_spec_for_RequestNotificationArg_Type,
        _root_component_type_list_2_spec_for_RequestNotificationArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestNotificationArg_Type(
        requestedNotifications,
        securityParameters,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_RequestNotificationArg_Type(el);
}

let _cached_encoder_for_RequestNotificationArg_Type: $.ASN1Encoder<RequestNotificationArg_Type> | null = null;

/**
 * @summary Encodes a(n) RequestNotificationArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestNotificationArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_RequestNotificationArg_Type (value: RequestNotificationArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestNotificationArg_Type) { _cached_encoder_for_RequestNotificationArg_Type = function (value: RequestNotificationArg_Type, elGetter: $.ASN1Encoder<RequestNotificationArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedNotifications, $.BER)(value.requestedNotifications, $.BER);
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestNotificationArg_Type(value, elGetter);
}


/* eslint-enable */
