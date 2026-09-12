/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { MaybeAddress, _decode_MaybeAddress, _encode_MaybeAddress } from "../MMS-SCI-Module-1/MaybeAddress.ta.mjs";
// export { MaybeAddress, _decode_MaybeAddress, _encode_MaybeAddress } from "../MMS-SCI-Module-1/MaybeAddress.ta.mjs";


/**
 * @summary Named_Variable_Definition_Details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Named-Variable-Definition-Details ::= SEQUENCE {
 *     accessControl   [3] IMPLICIT Access-Control-List-instance,
 *     typeDescription [4] TypeDescription,
 *     -- NOTE: Deviation from the original ISO 9506, but should
 *     -- produce the same exact encoding.
 *     address         [5] IMPLICIT MaybeAddress OPTIONAL,
 *     meaning         [6] IMPLICIT VisibleString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Named_Variable_Definition_Details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `typeDescription`.
         * @public
         * @readonly
         */
        readonly typeDescription: TypeDescription,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OPTIONAL<MaybeAddress>,
        /**
         * @summary `meaning`.
         * @public
         * @readonly
         */
        readonly meaning: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a Named_Variable_Definition_Details
     * @description
     * 
     * This takes an `object` and converts it to a `Named_Variable_Definition_Details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Named_Variable_Definition_Details`.
     * @returns {Named_Variable_Definition_Details}
     */
    public static _from_object (_o: { [_K in keyof (Named_Variable_Definition_Details)]: (Named_Variable_Definition_Details)[_K] }): Named_Variable_Definition_Details {
        return new Named_Variable_Definition_Details(_o.accessControl, _o.typeDescription, _o.address, _o.meaning);
    }


}

/**
 * @summary The Leading Root Component Types of Named_Variable_Definition_Details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Named_Variable_Definition_Details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("typeDescription", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("address", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("meaning", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of Named_Variable_Definition_Details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Named_Variable_Definition_Details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Named_Variable_Definition_Details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Named_Variable_Definition_Details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Named_Variable_Definition_Details: $.ASN1Decoder<Named_Variable_Definition_Details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Named_Variable_Definition_Details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Named_Variable_Definition_Details (el: _Element): Named_Variable_Definition_Details {
    if (!_cached_decoder_for_Named_Variable_Definition_Details) { _cached_decoder_for_Named_Variable_Definition_Details = function (el: _Element): Named_Variable_Definition_Details {
    let accessControl!: Access_Control_List_instance;
    let typeDescription!: TypeDescription;
    let address: OPTIONAL<MaybeAddress>;
    let meaning: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "typeDescription": (_el: _Element): void => { typeDescription = $._decode_explicit<TypeDescription>(() => _decode_TypeDescription)(_el); },
        "address": (_el: _Element): void => { address = $._decode_implicit<MaybeAddress>(() => _decode_MaybeAddress)(_el); },
        "meaning": (_el: _Element): void => { meaning = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Named_Variable_Definition_Details,
        _extension_additions_list_spec_for_Named_Variable_Definition_Details,
        _root_component_type_list_2_spec_for_Named_Variable_Definition_Details,
        undefined,
    );
    return new Named_Variable_Definition_Details(
        accessControl,
        typeDescription,
        address,
        meaning
    );
}; }
    return _cached_decoder_for_Named_Variable_Definition_Details(el);
}

let _cached_encoder_for_Named_Variable_Definition_Details: $.ASN1Encoder<Named_Variable_Definition_Details> | null = null;

/**
 * @summary Encodes a(n) Named_Variable_Definition_Details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Named_Variable_Definition_Details, encoded as an ASN.1 Element.
 */
export
function _encode_Named_Variable_Definition_Details (value: Named_Variable_Definition_Details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Named_Variable_Definition_Details) { _cached_encoder_for_Named_Variable_Definition_Details = function (value: Named_Variable_Definition_Details, elGetter: $.ASN1Encoder<Named_Variable_Definition_Details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_TypeDescription, $.BER)(value.typeDescription, $.BER),
            /* IF_ABSENT  */ ((value.address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MaybeAddress, $.BER)(value.address, $.BER)),
            /* IF_ABSENT  */ ((value.meaning === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeVisibleString, $.BER)(value.meaning, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Named_Variable_Definition_Details(value, elGetter);
}


/* eslint-enable */
