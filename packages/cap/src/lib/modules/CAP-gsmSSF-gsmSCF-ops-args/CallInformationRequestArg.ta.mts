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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type RequestedInformationTypeList, _decode_RequestedInformationTypeList, _encode_RequestedInformationTypeList } from "../CAP-datatypes/RequestedInformationTypeList.ta.mjs";
import { type SendingSideID, _decode_SendingSideID, _encode_SendingSideID } from "../CAP-datatypes/SendingSideID.ta.mjs";
import { leg2 } from "../Core-INAP-CS1-DataTypes/leg2.va.mjs";



/**
 * @summary CallInformationRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformationRequestArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     requestedInformationTypeList    [0] RequestedInformationTypeList,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     legID                [3] SendingSideID DEFAULT sendingSideID:leg2,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class CallInformationRequestArg {
    constructor (
        /**
         * @summary `requestedInformationTypeList`.
         * @public
         * @readonly
         */
        readonly requestedInformationTypeList: RequestedInformationTypeList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<SendingSideID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallInformationRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallInformationRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallInformationRequestArg`.
     * @returns {CallInformationRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CallInformationRequestArg)]: (CallInformationRequestArg)[_K] }): CallInformationRequestArg {
        return new CallInformationRequestArg(_o.requestedInformationTypeList, _o.extensions, _o.legID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { sendingSideID: leg2 }; }
}

/**
 * @summary The Leading Root Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationTypeList", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallInformationRequestArg: $.ASN1Decoder<CallInformationRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformationRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformationRequestArg (el: _Element): CallInformationRequestArg {
    if (!_cached_decoder_for_CallInformationRequestArg) { _cached_decoder_for_CallInformationRequestArg = function (el: _Element): CallInformationRequestArg {
    let requestedInformationTypeList!: RequestedInformationTypeList;
    let extensions: OPTIONAL<Extensions>;
    let legID: OPTIONAL<SendingSideID> = CallInformationRequestArg._default_value_for_legID;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInformationTypeList": (_el: _Element): void => { requestedInformationTypeList = $._decode_implicit<RequestedInformationTypeList>(() => _decode_RequestedInformationTypeList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_implicit<SendingSideID>(() => _decode_SendingSideID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallInformationRequestArg,
        _extension_additions_list_spec_for_CallInformationRequestArg,
        _root_component_type_list_2_spec_for_CallInformationRequestArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallInformationRequestArg(
        requestedInformationTypeList,
        extensions,
        legID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallInformationRequestArg(el);
}

let _cached_encoder_for_CallInformationRequestArg: $.ASN1Encoder<CallInformationRequestArg> | null = null;

/**
 * @summary Encodes a(n) CallInformationRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformationRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformationRequestArg (value: CallInformationRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformationRequestArg) { _cached_encoder_for_CallInformationRequestArg = function (value: CallInformationRequestArg, elGetter: $.ASN1Encoder<CallInformationRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationTypeList, $.BER)(value.requestedInformationTypeList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_DEFAULT */ (value.legID === undefined || $.deepEq(value.legID, CallInformationRequestArg._default_value_for_legID) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SendingSideID, $.BER)(value.legID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallInformationRequestArg(value, elGetter);
}


/* eslint-enable */
