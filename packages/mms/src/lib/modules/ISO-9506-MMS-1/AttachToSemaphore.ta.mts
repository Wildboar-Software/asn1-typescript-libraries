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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
// export { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary AttachToSemaphore
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachToSemaphore ::= SEQUENCE {
 *    semaphoreName                 [0] ObjectName,
 *    namedToken                    [1] IMPLICIT Identifier OPTIONAL,
 *    priority                      [2] IMPLICIT Priority DEFAULT normalPriority,
 *    acceptableDelay               [3] IMPLICIT Unsigned32 OPTIONAL,
 *    controlTimeOut                [4] IMPLICIT Unsigned32 OPTIONAL,
 *    abortOnTimeOut                [5] IMPLICIT BOOLEAN OPTIONAL,
 *    relinquishIfConnectionLost    [6] IMPLICIT BOOLEAN DEFAULT TRUE    }
 * ```
 * 
 * @class
 */
export
class AttachToSemaphore {
    constructor (
        /**
         * @summary `semaphoreName`.
         * @public
         * @readonly
         */
        readonly semaphoreName: ObjectName,
        /**
         * @summary `namedToken`.
         * @public
         * @readonly
         */
        readonly namedToken: OPTIONAL<Identifier>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `acceptableDelay`.
         * @public
         * @readonly
         */
        readonly acceptableDelay: OPTIONAL<Unsigned32>,
        /**
         * @summary `controlTimeOut`.
         * @public
         * @readonly
         */
        readonly controlTimeOut: OPTIONAL<Unsigned32>,
        /**
         * @summary `abortOnTimeOut`.
         * @public
         * @readonly
         */
        readonly abortOnTimeOut: OPTIONAL<BOOLEAN>,
        /**
         * @summary `relinquishIfConnectionLost`.
         * @public
         * @readonly
         */
        readonly relinquishIfConnectionLost: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AttachToSemaphore
     * @description
     * 
     * This takes an `object` and converts it to a `AttachToSemaphore`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachToSemaphore`.
     * @returns {AttachToSemaphore}
     */
    public static _from_object (_o: { [_K in keyof (AttachToSemaphore)]: (AttachToSemaphore)[_K] }): AttachToSemaphore {
        return new AttachToSemaphore(_o.semaphoreName, _o.namedToken, _o.priority, _o.acceptableDelay, _o.controlTimeOut, _o.abortOnTimeOut, _o.relinquishIfConnectionLost);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return normalPriority; }
    /**
     * @summary Getter that returns the default value for `relinquishIfConnectionLost`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_relinquishIfConnectionLost () { return true; }
}

/**
 * @summary The Leading Root Component Types of AttachToSemaphore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachToSemaphore: $.ComponentSpec[] = [
    new $.ComponentSpec("semaphoreName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("namedToken", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("acceptableDelay", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("controlTimeOut", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("abortOnTimeOut", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("relinquishIfConnectionLost", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AttachToSemaphore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachToSemaphore: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachToSemaphore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachToSemaphore: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachToSemaphore: $.ASN1Decoder<AttachToSemaphore> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachToSemaphore
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachToSemaphore (el: _Element): AttachToSemaphore {
    if (!_cached_decoder_for_AttachToSemaphore) { _cached_decoder_for_AttachToSemaphore = function (el: _Element): AttachToSemaphore {
    let semaphoreName!: ObjectName;
    let namedToken: OPTIONAL<Identifier>;
    let priority: OPTIONAL<Priority> = AttachToSemaphore._default_value_for_priority;
    let acceptableDelay: OPTIONAL<Unsigned32>;
    let controlTimeOut: OPTIONAL<Unsigned32>;
    let abortOnTimeOut: OPTIONAL<BOOLEAN>;
    let relinquishIfConnectionLost: OPTIONAL<BOOLEAN> = AttachToSemaphore._default_value_for_relinquishIfConnectionLost;
    const callbacks: $.DecodingMap = {
        "semaphoreName": (_el: _Element): void => { semaphoreName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "namedToken": (_el: _Element): void => { namedToken = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "acceptableDelay": (_el: _Element): void => { acceptableDelay = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "controlTimeOut": (_el: _Element): void => { controlTimeOut = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "abortOnTimeOut": (_el: _Element): void => { abortOnTimeOut = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relinquishIfConnectionLost": (_el: _Element): void => { relinquishIfConnectionLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachToSemaphore,
        _extension_additions_list_spec_for_AttachToSemaphore,
        _root_component_type_list_2_spec_for_AttachToSemaphore,
        undefined,
    );
    return new AttachToSemaphore(
        semaphoreName,
        namedToken,
        priority,
        acceptableDelay,
        controlTimeOut,
        abortOnTimeOut,
        relinquishIfConnectionLost
    );
}; }
    return _cached_decoder_for_AttachToSemaphore(el);
}

let _cached_encoder_for_AttachToSemaphore: $.ASN1Encoder<AttachToSemaphore> | null = null;

/**
 * @summary Encodes a(n) AttachToSemaphore into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachToSemaphore, encoded as an ASN.1 Element.
 */
export
function _encode_AttachToSemaphore (value: AttachToSemaphore, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachToSemaphore) { _cached_encoder_for_AttachToSemaphore = function (value: AttachToSemaphore, elGetter: $.ASN1Encoder<AttachToSemaphore>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.semaphoreName, $.BER),
            /* IF_ABSENT  */ ((value.namedToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.namedToken, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, AttachToSemaphore._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.acceptableDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned32, $.BER)(value.acceptableDelay, $.BER)),
            /* IF_ABSENT  */ ((value.controlTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Unsigned32, $.BER)(value.controlTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.abortOnTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.abortOnTimeOut, $.BER)),
            /* IF_DEFAULT */ (value.relinquishIfConnectionLost === undefined || $.deepEq(value.relinquishIfConnectionLost, AttachToSemaphore._default_value_for_relinquishIfConnectionLost) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.relinquishIfConnectionLost, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttachToSemaphore(value, elGetter);
}


/* eslint-enable */
