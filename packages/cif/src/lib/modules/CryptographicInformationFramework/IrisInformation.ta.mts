/* eslint-disable */
import {
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
import { IrisInformation_eye, _enum_for_IrisInformation_eye, _decode_IrisInformation_eye, _encode_IrisInformation_eye } from "../CryptographicInformationFramework/IrisInformation-eye.ta.mjs";
// export { IrisInformation_eye, _enum_for_IrisInformation_eye, IrisInformation_eye_left /* IMPORTED_LONG_ENUMERATION_ITEM */, left /* IMPORTED_SHORT_ENUMERATION_ITEM */, IrisInformation_eye_right /* IMPORTED_LONG_ENUMERATION_ITEM */, right /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IrisInformation_eye, _encode_IrisInformation_eye } from "../CryptographicInformationFramework/IrisInformation-eye.ta.mjs";


/**
 * @summary IrisInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation ::= SEQUENCE {
 *     eye     ENUMERATED {left, right},
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class IrisInformation {
    constructor (
        /**
         * @summary `eye`.
         * @public
         * @readonly
         */
        readonly eye: IrisInformation_eye,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IrisInformation
     * @description
     * 
     * This takes an `object` and converts it to a `IrisInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IrisInformation`.
     * @returns {IrisInformation}
     */
    public static _from_object (_o: { [_K in keyof (IrisInformation)]: (IrisInformation)[_K] }): IrisInformation {
        return new IrisInformation(_o.eye, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eye`
         * @public
         * @static
         */

    public static _enum_for_eye = _enum_for_IrisInformation_eye;
}

/**
 * @summary The Leading Root Component Types of IrisInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IrisInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("eye", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of IrisInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IrisInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IrisInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IrisInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IrisInformation: $.ASN1Decoder<IrisInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IrisInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IrisInformation (el: _Element): IrisInformation {
    if (!_cached_decoder_for_IrisInformation) { _cached_decoder_for_IrisInformation = function (el: _Element): IrisInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IrisInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eye";
    let eye!: IrisInformation_eye;
    eye = _decode_IrisInformation_eye(sequence[0]);
    return new IrisInformation(
        eye,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_IrisInformation(el);
}

let _cached_encoder_for_IrisInformation: $.ASN1Encoder<IrisInformation> | null = null;

/**
 * @summary Encodes a(n) IrisInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IrisInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IrisInformation (value: IrisInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IrisInformation) { _cached_encoder_for_IrisInformation = function (value: IrisInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IrisInformation_eye(value.eye, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IrisInformation(value, elGetter);
}


/* eslint-enable */
