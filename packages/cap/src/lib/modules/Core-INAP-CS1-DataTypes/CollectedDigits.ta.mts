/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorTreatment, _enum_for_ErrorTreatment, ErrorTreatment_stdErrorAndInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ErrorTreatment, _encode_ErrorTreatment } from "../Core-INAP-CS1-DataTypes/ErrorTreatment.ta.mjs";
// export { ErrorTreatment, _enum_for_ErrorTreatment, ErrorTreatment_stdErrorAndInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, stdErrorAndInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorTreatment_help /* IMPORTED_LONG_ENUMERATION_ITEM */, help /* IMPORTED_SHORT_ENUMERATION_ITEM */, ErrorTreatment_repeatPrompt /* IMPORTED_LONG_ENUMERATION_ITEM */, repeatPrompt /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ErrorTreatment, _encode_ErrorTreatment } from "../Core-INAP-CS1-DataTypes/ErrorTreatment.ta.mjs";


/**
 * @summary CollectedDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectedDigits ::= SEQUENCE {
 *      minimumNbOfDigits     [0] INTEGER (1..127)     DEFAULT 1,
 *      maximumNbOfDigits     [1] INTEGER (1..127),
 *      endOfReplyDigit      [2] OCTET STRING (SIZE (1..2))     OPTIONAL,
 *      cancelDigit     [3] OCTET STRING (SIZE (1..2))     OPTIONAL,
 *      startDigit     [4] OCTET STRING (SIZE (1..2))     OPTIONAL,
 *      firstDigitTimeOut     [5] INTEGER (1..127)     OPTIONAL,
 *      interDigitTimeOut     [6] INTEGER (1..127)     OPTIONAL,
 *      errortreatment     [7] ErrorTreatment     DEFAULT stdErrorAndInfo,
 *      interruptableAnnInd     [8] BOOLEAN     DEFAULT TRUE,
 *      voiceInformation     [9] BOOLEAN     DEFAULT FALSE,
 *      voiceBack     [10] BOOLEAN     DEFAULT FALSE
 *      }
 * ```
 * 
 * @class
 */
export
class CollectedDigits {
    constructor (
        /**
         * @summary `minimumNbOfDigits`.
         * @public
         * @readonly
         */
        readonly minimumNbOfDigits: OPTIONAL<INTEGER>,
        /**
         * @summary `maximumNbOfDigits`.
         * @public
         * @readonly
         */
        readonly maximumNbOfDigits: INTEGER,
        /**
         * @summary `endOfReplyDigit`.
         * @public
         * @readonly
         */
        readonly endOfReplyDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `cancelDigit`.
         * @public
         * @readonly
         */
        readonly cancelDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `startDigit`.
         * @public
         * @readonly
         */
        readonly startDigit: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `firstDigitTimeOut`.
         * @public
         * @readonly
         */
        readonly firstDigitTimeOut: OPTIONAL<INTEGER>,
        /**
         * @summary `interDigitTimeOut`.
         * @public
         * @readonly
         */
        readonly interDigitTimeOut: OPTIONAL<INTEGER>,
        /**
         * @summary `errortreatment`.
         * @public
         * @readonly
         */
        readonly errortreatment: OPTIONAL<ErrorTreatment>,
        /**
         * @summary `interruptableAnnInd`.
         * @public
         * @readonly
         */
        readonly interruptableAnnInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary `voiceInformation`.
         * @public
         * @readonly
         */
        readonly voiceInformation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `voiceBack`.
         * @public
         * @readonly
         */
        readonly voiceBack: OPTIONAL<BOOLEAN>
    ) {
        if (endOfReplyDigit !== undefined && (endOfReplyDigit.length < 1 || endOfReplyDigit.length > 2)) {
            throw new ASN1SizeError("CollectedDigits.endOfReplyDigit violates SIZE constraint");
        }
        if (cancelDigit !== undefined && (cancelDigit.length < 1 || cancelDigit.length > 2)) {
            throw new ASN1SizeError("CollectedDigits.cancelDigit violates SIZE constraint");
        }
        if (startDigit !== undefined && (startDigit.length < 1 || startDigit.length > 2)) {
            throw new ASN1SizeError("CollectedDigits.startDigit violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CollectedDigits
     * @description
     * 
     * This takes an `object` and converts it to a `CollectedDigits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CollectedDigits`.
     * @returns {CollectedDigits}
     */
    public static _from_object (_o: { [_K in keyof (CollectedDigits)]: (CollectedDigits)[_K] }): CollectedDigits {
        return new CollectedDigits(_o.minimumNbOfDigits, _o.maximumNbOfDigits, _o.endOfReplyDigit, _o.cancelDigit, _o.startDigit, _o.firstDigitTimeOut, _o.interDigitTimeOut, _o.errortreatment, _o.interruptableAnnInd, _o.voiceInformation, _o.voiceBack);
    }

    /**
     * @summary Getter that returns the default value for `minimumNbOfDigits`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimumNbOfDigits () { return 1; }
    /**
     * @summary Getter that returns the default value for `errortreatment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_errortreatment () { return ErrorTreatment_stdErrorAndInfo; }
    /**
     * @summary Getter that returns the default value for `interruptableAnnInd`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_interruptableAnnInd () { return true; }
    /**
     * @summary Getter that returns the default value for `voiceInformation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceInformation () { return false; }
    /**
     * @summary Getter that returns the default value for `voiceBack`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceBack () { return false; }        /**
         * @summary The enum used as the type of the component `errortreatment`
         * @public
         * @static
         */

    public static _enum_for_errortreatment = _enum_for_ErrorTreatment;
}

/**
 * @summary The Leading Root Component Types of CollectedDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CollectedDigits: $.ComponentSpec[] = [
    new $.ComponentSpec("minimumNbOfDigits", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximumNbOfDigits", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endOfReplyDigit", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cancelDigit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startDigit", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("firstDigitTimeOut", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("interDigitTimeOut", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("errortreatment", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("interruptableAnnInd", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("voiceInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("voiceBack", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of CollectedDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CollectedDigits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CollectedDigits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CollectedDigits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CollectedDigits: $.ASN1Decoder<CollectedDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectedDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectedDigits (el: _Element): CollectedDigits {
    if (!_cached_decoder_for_CollectedDigits) { _cached_decoder_for_CollectedDigits = function (el: _Element): CollectedDigits {
    let minimumNbOfDigits: OPTIONAL<INTEGER> = CollectedDigits._default_value_for_minimumNbOfDigits;
    let maximumNbOfDigits!: INTEGER;
    let endOfReplyDigit: OPTIONAL<OCTET_STRING>;
    let cancelDigit: OPTIONAL<OCTET_STRING>;
    let startDigit: OPTIONAL<OCTET_STRING>;
    let firstDigitTimeOut: OPTIONAL<INTEGER>;
    let interDigitTimeOut: OPTIONAL<INTEGER>;
    let errortreatment: OPTIONAL<ErrorTreatment> = CollectedDigits._default_value_for_errortreatment;
    let interruptableAnnInd: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_interruptableAnnInd;
    let voiceInformation: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_voiceInformation;
    let voiceBack: OPTIONAL<BOOLEAN> = CollectedDigits._default_value_for_voiceBack;
    const callbacks: $.DecodingMap = {
        "minimumNbOfDigits": (_el: _Element): void => { minimumNbOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maximumNbOfDigits": (_el: _Element): void => { maximumNbOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "endOfReplyDigit": (_el: _Element): void => { endOfReplyDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cancelDigit": (_el: _Element): void => { cancelDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startDigit": (_el: _Element): void => { startDigit = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "firstDigitTimeOut": (_el: _Element): void => { firstDigitTimeOut = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interDigitTimeOut": (_el: _Element): void => { interDigitTimeOut = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "errortreatment": (_el: _Element): void => { errortreatment = $._decode_implicit<ErrorTreatment>(() => _decode_ErrorTreatment)(_el); },
        "interruptableAnnInd": (_el: _Element): void => { interruptableAnnInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "voiceInformation": (_el: _Element): void => { voiceInformation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "voiceBack": (_el: _Element): void => { voiceBack = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectedDigits,
        _extension_additions_list_spec_for_CollectedDigits,
        _root_component_type_list_2_spec_for_CollectedDigits,
        undefined,
    );
    return new CollectedDigits(
        minimumNbOfDigits,
        maximumNbOfDigits,
        endOfReplyDigit,
        cancelDigit,
        startDigit,
        firstDigitTimeOut,
        interDigitTimeOut,
        errortreatment,
        interruptableAnnInd,
        voiceInformation,
        voiceBack
    );
}; }
    return _cached_decoder_for_CollectedDigits(el);
}

let _cached_encoder_for_CollectedDigits: $.ASN1Encoder<CollectedDigits> | null = null;

/**
 * @summary Encodes a(n) CollectedDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectedDigits, encoded as an ASN.1 Element.
 */
export
function _encode_CollectedDigits (value: CollectedDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectedDigits) { _cached_encoder_for_CollectedDigits = function (value: CollectedDigits): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.minimumNbOfDigits === undefined || $.deepEq(value.minimumNbOfDigits, CollectedDigits._default_value_for_minimumNbOfDigits) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.minimumNbOfDigits, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumNbOfDigits, $.BER),
            /* IF_ABSENT  */ ((value.endOfReplyDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.endOfReplyDigit, $.BER)),
            /* IF_ABSENT  */ ((value.cancelDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cancelDigit, $.BER)),
            /* IF_ABSENT  */ ((value.startDigit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.startDigit, $.BER)),
            /* IF_ABSENT  */ ((value.firstDigitTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.firstDigitTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.interDigitTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.interDigitTimeOut, $.BER)),
            /* IF_DEFAULT */ (value.errortreatment === undefined || $.deepEq(value.errortreatment, CollectedDigits._default_value_for_errortreatment) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ErrorTreatment, $.BER)(value.errortreatment, $.BER)),
            /* IF_DEFAULT */ (value.interruptableAnnInd === undefined || $.deepEq(value.interruptableAnnInd, CollectedDigits._default_value_for_interruptableAnnInd) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.interruptableAnnInd, $.BER)),
            /* IF_DEFAULT */ (value.voiceInformation === undefined || $.deepEq(value.voiceInformation, CollectedDigits._default_value_for_voiceInformation) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.voiceInformation, $.BER)),
            /* IF_DEFAULT */ (value.voiceBack === undefined || $.deepEq(value.voiceBack, CollectedDigits._default_value_for_voiceBack) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.voiceBack, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CollectedDigits(value, elGetter);
}


/* eslint-enable */
