/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    T61String,
    UTCTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionConnectionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionConnectionIdentifier ::= [0] SEQUENCE {
 *     callingSSUserReference          T61String,
 *     commonReference                 UTCTime,
 *     additionalReferenceInformation  [0] IMPLICIT T61String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SessionConnectionIdentifier {
    constructor (
        /**
         * @summary `callingSSUserReference`.
         * @public
         * @readonly
         */
        readonly callingSSUserReference: T61String,
        /**
         * @summary `commonReference`.
         * @public
         * @readonly
         */
        readonly commonReference: UTCTime,
        /**
         * @summary `additionalReferenceInformation`.
         * @public
         * @readonly
         */
        readonly additionalReferenceInformation: OPTIONAL<T61String>
    ) {}

    /**
     * @summary Restructures an object into a SessionConnectionIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `SessionConnectionIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SessionConnectionIdentifier`.
     * @returns {SessionConnectionIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (SessionConnectionIdentifier)]: (SessionConnectionIdentifier)[_K] }): SessionConnectionIdentifier {
        return new SessionConnectionIdentifier(_o.callingSSUserReference, _o.commonReference, _o.additionalReferenceInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SessionConnectionIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("callingSSUserReference", false, $.hasTag(_TagClass.universal, 20)),
    new $.ComponentSpec("commonReference", false, $.hasTag(_TagClass.universal, 23)),
    new $.ComponentSpec("additionalReferenceInformation", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SessionConnectionIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SessionConnectionIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SessionConnectionIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SessionConnectionIdentifier: $.ASN1Decoder<SessionConnectionIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionConnectionIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionConnectionIdentifier (el: _Element): SessionConnectionIdentifier {
    if (!_cached_decoder_for_SessionConnectionIdentifier) { _cached_decoder_for_SessionConnectionIdentifier = $._decode_implicit<SessionConnectionIdentifier>(() => function (el: _Element): SessionConnectionIdentifier {
    let callingSSUserReference!: T61String;
    let commonReference!: UTCTime;
    let additionalReferenceInformation: OPTIONAL<T61String>;
    const callbacks: $.DecodingMap = {
        "callingSSUserReference": (_el: _Element): void => { callingSSUserReference = $._decodeT61String(_el); },
        "commonReference": (_el: _Element): void => { commonReference = $._decodeUTCTime(_el); },
        "additionalReferenceInformation": (_el: _Element): void => { additionalReferenceInformation = $._decode_implicit<T61String>(() => $._decodeT61String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SessionConnectionIdentifier,
        _extension_additions_list_spec_for_SessionConnectionIdentifier,
        _root_component_type_list_2_spec_for_SessionConnectionIdentifier,
        undefined,
    );
    return new SessionConnectionIdentifier(
        callingSSUserReference,
        commonReference,
        additionalReferenceInformation
    );
}); }
    return _cached_decoder_for_SessionConnectionIdentifier(el);
}

let _cached_encoder_for_SessionConnectionIdentifier: $.ASN1Encoder<SessionConnectionIdentifier> | null = null;

/**
 * @summary Encodes a(n) SessionConnectionIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionConnectionIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SessionConnectionIdentifier (value: SessionConnectionIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionConnectionIdentifier) { _cached_encoder_for_SessionConnectionIdentifier = $._encode_implicit(_TagClass.context, 0, () => function (value: SessionConnectionIdentifier, elGetter: $.ASN1Encoder<SessionConnectionIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeT61String(value.callingSSUserReference, $.BER),
            /* REQUIRED   */ $._encodeUTCTime(value.commonReference, $.BER),
            /* IF_ABSENT  */ ((value.additionalReferenceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeT61String, $.BER)(value.additionalReferenceInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SessionConnectionIdentifier(value, elGetter);
}


/* eslint-enable */
