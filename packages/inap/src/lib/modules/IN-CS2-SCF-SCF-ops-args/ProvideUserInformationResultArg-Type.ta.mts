/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ReceivedInformation, _decode_ReceivedInformation, _encode_ReceivedInformation } from "../IN-CS2-datatypes/ReceivedInformation.ta.mjs";
// export { ReceivedInformation, _decode_ReceivedInformation, _encode_ReceivedInformation } from "../IN-CS2-datatypes/ReceivedInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ProvideUserInformationResultArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationResultArg-Type ::=
 * SEQUENCE {
 *   userInformation [0] ReceivedInformation,
 *   securityParameters [1] SecurityParameters OPTIONAL,
 *   extensions [1] SEQUENCE OF ExtensionField OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProvideUserInformationResultArg_Type {
    /**
     * @summary `userInformation`.
     * @public
     * @readonly
     */
    readonly userInformation: ReceivedInformation;
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
    readonly extensions: OPTIONAL<ExtensionField[]>;

    constructor (
        userInformation: ReceivedInformation,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<ExtensionField[]>
    ) {
        this.userInformation = userInformation;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a ProvideUserInformationResultArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideUserInformationResultArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideUserInformationResultArg_Type`.
     * @returns {ProvideUserInformationResultArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (ProvideUserInformationResultArg_Type)]: (ProvideUserInformationResultArg_Type)[_K] }): ProvideUserInformationResultArg_Type {
        return new ProvideUserInformationResultArg_Type(_o.userInformation, _o.securityParameters, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideUserInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideUserInformationResultArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("userInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ProvideUserInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideUserInformationResultArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideUserInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideUserInformationResultArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideUserInformationResultArg_Type: $.ASN1Decoder<ProvideUserInformationResultArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationResultArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationResultArg_Type (el: _Element): ProvideUserInformationResultArg_Type {
    if (!_cached_decoder_for_ProvideUserInformationResultArg_Type) { _cached_decoder_for_ProvideUserInformationResultArg_Type = function (el: _Element): ProvideUserInformationResultArg_Type {
    let userInformation!: ReceivedInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "userInformation": (_el: _Element): void => { userInformation = $._decode_implicit<ReceivedInformation>(() => _decode_ReceivedInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideUserInformationResultArg_Type,
        _extension_additions_list_spec_for_ProvideUserInformationResultArg_Type,
        _root_component_type_list_2_spec_for_ProvideUserInformationResultArg_Type,
        undefined,
    );
    return new ProvideUserInformationResultArg_Type(
        userInformation,
        securityParameters,
        extensions
    );
}; }
    return _cached_decoder_for_ProvideUserInformationResultArg_Type(el);
}

let _cached_encoder_for_ProvideUserInformationResultArg_Type: $.ASN1Encoder<ProvideUserInformationResultArg_Type> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationResultArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationResultArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationResultArg_Type (value: ProvideUserInformationResultArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationResultArg_Type) { _cached_encoder_for_ProvideUserInformationResultArg_Type = function (value: ProvideUserInformationResultArg_Type, elGetter: $.ASN1Encoder<ProvideUserInformationResultArg_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReceivedInformation, $.BER)(value.userInformation, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.extensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProvideUserInformationResultArg_Type(value, elGetter);
}


/* eslint-enable */
