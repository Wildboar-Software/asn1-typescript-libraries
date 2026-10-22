/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
// export { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
import { DestinationRelatedInfo, _decode_DestinationRelatedInfo, _encode_DestinationRelatedInfo } from "../IN-SCF-SCF-datatypes/DestinationRelatedInfo.ta.mjs";
// export { DestinationRelatedInfo, _decode_DestinationRelatedInfo, _encode_DestinationRelatedInfo } from "../IN-SCF-SCF-datatypes/DestinationRelatedInfo.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary InitiateCallRequestArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallRequestArg-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class InitiateCallRequestArg_Type {
    /**
     * @summary `requestedType`.
     * @public
     * @readonly
     */
    readonly requestedType: OPTIONAL<RequestedType>;
    /**
     * @summary `destinationRelatedInfo`.
     * @public
     * @readonly
     */
    readonly destinationRelatedInfo: OPTIONAL<DestinationRelatedInfo[]>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        requestedType: OPTIONAL<RequestedType>,
        destinationRelatedInfo: OPTIONAL<DestinationRelatedInfo[]>,
        securityParameters: OPTIONAL<SecurityParameters>,
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedType = requestedType;
        this.destinationRelatedInfo = destinationRelatedInfo;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitiateCallRequestArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateCallRequestArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateCallRequestArg_Type`.
     * @returns {InitiateCallRequestArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (InitiateCallRequestArg_Type)]: (InitiateCallRequestArg_Type)[_K] }): InitiateCallRequestArg_Type {
        return new InitiateCallRequestArg_Type(_o.requestedType, _o.destinationRelatedInfo, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateCallRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateCallRequestArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationRelatedInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of InitiateCallRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateCallRequestArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateCallRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateCallRequestArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateCallRequestArg_Type: $.ASN1Decoder<InitiateCallRequestArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallRequestArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallRequestArg_Type (el: _Element): InitiateCallRequestArg_Type {
    if (!_cached_decoder_for_InitiateCallRequestArg_Type) { _cached_decoder_for_InitiateCallRequestArg_Type = function (el: _Element): InitiateCallRequestArg_Type {
    let requestedType: OPTIONAL<RequestedType>;
    let destinationRelatedInfo: OPTIONAL<DestinationRelatedInfo[]>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedType": (_el: _Element): void => { requestedType = $._decode_implicit<RequestedType>(() => _decode_RequestedType)(_el); },
        "destinationRelatedInfo": (_el: _Element): void => { destinationRelatedInfo = $._decode_implicit<DestinationRelatedInfo[]>(() => $._decodeSequenceOf<DestinationRelatedInfo>(() => _decode_DestinationRelatedInfo))(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateCallRequestArg_Type,
        _extension_additions_list_spec_for_InitiateCallRequestArg_Type,
        _root_component_type_list_2_spec_for_InitiateCallRequestArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateCallRequestArg_Type(
        requestedType,
        destinationRelatedInfo,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateCallRequestArg_Type(el);
}

let _cached_encoder_for_InitiateCallRequestArg_Type: $.ASN1Encoder<InitiateCallRequestArg_Type> | null = null;

/**
 * @summary Encodes a(n) InitiateCallRequestArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallRequestArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallRequestArg_Type (value: InitiateCallRequestArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallRequestArg_Type) { _cached_encoder_for_InitiateCallRequestArg_Type = function (value: InitiateCallRequestArg_Type, elGetter: $.ASN1Encoder<InitiateCallRequestArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.requestedType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedType, $.BER)(value.requestedType, $.BER);
    }
    if (value.destinationRelatedInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<DestinationRelatedInfo>(() => _encode_DestinationRelatedInfo, $.BER), $.BER)(value.destinationRelatedInfo, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitiateCallRequestArg_Type(value, elGetter);
}


/* eslint-enable */
