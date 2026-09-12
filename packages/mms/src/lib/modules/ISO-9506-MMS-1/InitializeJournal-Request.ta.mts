/* eslint-disable */
import {
    OPTIONAL,
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { InitializeJournal_Request_limitSpecification, _decode_InitializeJournal_Request_limitSpecification, _encode_InitializeJournal_Request_limitSpecification } from "../ISO-9506-MMS-1/InitializeJournal-Request-limitSpecification.ta.mjs";
// export { InitializeJournal_Request_limitSpecification, _decode_InitializeJournal_Request_limitSpecification, _encode_InitializeJournal_Request_limitSpecification } from "../ISO-9506-MMS-1/InitializeJournal-Request-limitSpecification.ta.mjs";


/**
 * @summary InitializeJournal_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitializeJournal-Request ::= SEQUENCE {
 *    journalName                [0] ObjectName,
 *    limitSpecification         [1] IMPLICIT SEQUENCE {
 *        limitingTime               [0] IMPLICIT TimeOfDay,
 *        limitingEntry              [1] IMPLICIT OCTET STRING OPTIONAL } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class InitializeJournal_Request {
    constructor (
        /**
         * @summary `journalName`.
         * @public
         * @readonly
         */
        readonly journalName: ObjectName,
        /**
         * @summary `limitSpecification`.
         * @public
         * @readonly
         */
        readonly limitSpecification: OPTIONAL<InitializeJournal_Request_limitSpecification>
    ) {}

    /**
     * @summary Restructures an object into a InitializeJournal_Request
     * @description
     * 
     * This takes an `object` and converts it to a `InitializeJournal_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializeJournal_Request`.
     * @returns {InitializeJournal_Request}
     */
    public static _from_object (_o: { [_K in keyof (InitializeJournal_Request)]: (InitializeJournal_Request)[_K] }): InitializeJournal_Request {
        return new InitializeJournal_Request(_o.journalName, _o.limitSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of InitializeJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitializeJournal_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("journalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("limitSpecification", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of InitializeJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitializeJournal_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitializeJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitializeJournal_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitializeJournal_Request: $.ASN1Decoder<InitializeJournal_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializeJournal_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitializeJournal_Request (el: _Element): InitializeJournal_Request {
    if (!_cached_decoder_for_InitializeJournal_Request) { _cached_decoder_for_InitializeJournal_Request = function (el: _Element): InitializeJournal_Request {
    let journalName!: ObjectName;
    let limitSpecification: OPTIONAL<InitializeJournal_Request_limitSpecification>;
    const callbacks: $.DecodingMap = {
        "journalName": (_el: _Element): void => { journalName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "limitSpecification": (_el: _Element): void => { limitSpecification = $._decode_implicit<InitializeJournal_Request_limitSpecification>(() => _decode_InitializeJournal_Request_limitSpecification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitializeJournal_Request,
        _extension_additions_list_spec_for_InitializeJournal_Request,
        _root_component_type_list_2_spec_for_InitializeJournal_Request,
        undefined,
    );
    return new InitializeJournal_Request(
        journalName,
        limitSpecification
    );
}; }
    return _cached_decoder_for_InitializeJournal_Request(el);
}

let _cached_encoder_for_InitializeJournal_Request: $.ASN1Encoder<InitializeJournal_Request> | null = null;

/**
 * @summary Encodes a(n) InitializeJournal_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializeJournal_Request, encoded as an ASN.1 Element.
 */
export
function _encode_InitializeJournal_Request (value: InitializeJournal_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitializeJournal_Request) { _cached_encoder_for_InitializeJournal_Request = function (value: InitializeJournal_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.journalName, $.BER),
            /* IF_ABSENT  */ ((value.limitSpecification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InitializeJournal_Request_limitSpecification, $.BER)(value.limitSpecification, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitializeJournal_Request(value, elGetter);
}


/* eslint-enable */
