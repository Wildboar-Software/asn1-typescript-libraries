/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
// export { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";


/**
 * @summary CommonDataContainerObjectAttributes
 * @description
 * 
 * At least one of `applicationName` or `applicationOID` shall be present;
 * `applicationOID` is recommended to avoid name collisions. ISO/IEC
 * 7816-15:2016 §8.2.17.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonDataContainerObjectAttributes ::= SEQUENCE {
 *     applicationName Label OPTIONAL,
 *     applicationOID  OBJECT IDENTIFIER OPTIONAL,
 *     iD              Identifier OPTIONAL,
 *     ... -- For future extensions
 * } (
 *     WITH COMPONENTS {..., applicationName PRESENT}
 *     | WITH COMPONENTS {..., applicationOID PRESENT}
 * )
 * ```
 * 
 * @class
 */
export
class CommonDataContainerObjectAttributes {
    constructor (
        /**
         * @summary `applicationName`.
         * @description
         * Name of the application that "owns" the data container. ISO/IEC
         * 7816-15:2016 §8.2.17.
         * @public
         * @readonly
         */
        readonly applicationName: OPTIONAL<Label>,
        /**
         * @summary `applicationOID`.
         * @description
         * Registered OID of that application. ISO/IEC 7816-15:2016 §8.2.17.
         * @public
         * @readonly
         */
        readonly applicationOID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `iD`.
         * @description
         * Optional association with another CIO (e.g. a private key). ISO/IEC
         * 7816-15:2016 §8.2.17.
         * @public
         * @readonly
         */
        readonly iD: OPTIONAL<Identifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (applicationName === undefined && applicationOID === undefined) {
            throw new ASN1ConstructionError("CommonDataContainerObjectAttributes requires applicationName or applicationOID");
        }
    }

    /**
     * @summary Restructures an object into a CommonDataContainerObjectAttributes
     * @description
     * 
     * This takes an `object` and converts it to a
     * `CommonDataContainerObjectAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonDataContainerObjectAttributes`.
     * @returns {CommonDataContainerObjectAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonDataContainerObjectAttributes)]: (CommonDataContainerObjectAttributes)[_K] }): CommonDataContainerObjectAttributes {
        return new CommonDataContainerObjectAttributes(_o.applicationName, _o.applicationOID, _o.iD, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonDataContainerObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonDataContainerObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("applicationName", true, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("applicationOID", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("iD", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CommonDataContainerObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonDataContainerObjectAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonDataContainerObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonDataContainerObjectAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonDataContainerObjectAttributes: $.ASN1Decoder<CommonDataContainerObjectAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonDataContainerObjectAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonDataContainerObjectAttributes (el: _Element): CommonDataContainerObjectAttributes {
    if (!_cached_decoder_for_CommonDataContainerObjectAttributes) { _cached_decoder_for_CommonDataContainerObjectAttributes = function (el: _Element): CommonDataContainerObjectAttributes {
    let applicationName: OPTIONAL<Label>;
    let applicationOID: OPTIONAL<OBJECT_IDENTIFIER>;
    let iD: OPTIONAL<Identifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "applicationName": (_el: _Element): void => { applicationName = _decode_Label(_el); },
        "applicationOID": (_el: _Element): void => { applicationOID = $._decodeObjectIdentifier(_el); },
        "iD": (_el: _Element): void => { iD = _decode_Identifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonDataContainerObjectAttributes,
        _extension_additions_list_spec_for_CommonDataContainerObjectAttributes,
        _root_component_type_list_2_spec_for_CommonDataContainerObjectAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonDataContainerObjectAttributes(
        applicationName,
        applicationOID,
        iD,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonDataContainerObjectAttributes(el);
}

let _cached_encoder_for_CommonDataContainerObjectAttributes: $.ASN1Encoder<CommonDataContainerObjectAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonDataContainerObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonDataContainerObjectAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonDataContainerObjectAttributes (value: CommonDataContainerObjectAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonDataContainerObjectAttributes) { _cached_encoder_for_CommonDataContainerObjectAttributes = function (value: CommonDataContainerObjectAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.applicationName === undefined) ? undefined : _encode_Label(value.applicationName, $.BER)),
            /* IF_ABSENT  */ ((value.applicationOID === undefined) ? undefined : $._encodeObjectIdentifier(value.applicationOID, $.BER)),
            /* IF_ABSENT  */ ((value.iD === undefined) ? undefined : _encode_Identifier(value.iD, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonDataContainerObjectAttributes(value, elGetter);
}


/* eslint-enable */
