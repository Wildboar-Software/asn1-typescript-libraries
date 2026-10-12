/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Octet16, _decode_Octet16, _encode_Octet16 } from "@wildboar/sgp22/RSPDefinitions";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { EuiccPackage, _decode_EuiccPackage, _encode_EuiccPackage } from "../SGP32Definitions/EuiccPackage.ta.mjs";


/**
 * @summary EuiccPackageSigned
 * @description
 * 
 * The data the eIM signs, together with the association token, to produce
 * eimSignature (SGP.32 v1.2, section 2.11.1.1). The eUICC echoes eimId,
 * eimTransactionId, and counterValue in the package result so the eIM can
 * match them. Each eIM keeps its own counter and increments it by 1 for every
 * package it sends. The eUICC handles counter values through 8388607
 * (0x7FFFFF) inclusive.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageSigned ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     eidValue [APPLICATION 26] Octet16, -- Tag '5A'
 *     counterValue [1] INTEGER,
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     euiccPackage EuiccPackage
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageSigned {
    constructor (
        /**
         * @summary `eimId`.
         * @description
         * Identifier of the eIM that issued this package, matching an Associated eIM
         * stored on the eUICC (SGP.32 v1.2, sections 2.11.1.1 and 4.3). Length 1 to
         * 128 bytes. An unknown value produces euiccPackageErrorUnsigned (section
         * 5.9.1).
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `eidValue`.
         * @description
         * EID of the eUICC this package targets (SGP.32 v1.2, section 2.11.1.1). The
         * eUICC compares it with its own EID and returns the signed error invalidEid
         * on a mismatch (section 5.9.1).
         * @public
         * @readonly
         */
        readonly eidValue: Octet16,
        /**
         * @summary `counterValue`.
         * @description
         * Replay counter for this eIM. The eIM increments its counter by 1 for each
         * package. The eUICC accepts the package only when this value is greater than
         * the highest counter it has stored for this eIM, then stores this value once
         * the signed execution result is produced (SGP.32 v1.2, sections 2.11.1.1 and
         * 5.9.1). A smaller or equal value produces replayError. A value above the
         * maximum the eUICC can store produces counterValueOutOfRange. The
         * implementation handles at least 8388607 (0x7FFFFF) inclusive.
         * @public
         * @readonly
         */
        readonly counterValue: INTEGER,
        /**
         * @summary `eimTransactionId`.
         * @description
         * Optional transaction identifier as defined in SGP.22, which SGP.32 cites
         * (SGP.32 v1.2, section 2.11.1.1). When present, the eUICC echoes it in the
         * signed result and in both the signed and unsigned errors (section 2.11.2.1).
         * The eIM may use it to link this package to that result (section 3.3.1).
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `euiccPackage`.
         * @description
         * Either the PSMO list or the eCO list to execute, in order, after
         * verification succeeds (SGP.32 v1.2, sections 2.11.1.1 and 5.9.1).
         * @public
         * @readonly
         */
        readonly euiccPackage: EuiccPackage
    ) {
        if (this.eimId.length < 1 || this.eimId.length > 128) {
            throw new ASN1SizeError("EuiccPackageSigned.eimId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EuiccPackageSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageSigned`.
     * @returns {EuiccPackageSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageSigned)]: (EuiccPackageSigned)[_K] }): EuiccPackageSigned {
        return new EuiccPackageSigned(_o.eimId, _o.eidValue, _o.counterValue, _o.eimTransactionId, _o.euiccPackage);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eidValue", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccPackage", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageSigned: $.ASN1Decoder<EuiccPackageSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageSigned (el: _Element): EuiccPackageSigned {
    if (!_cached_decoder_for_EuiccPackageSigned) { _cached_decoder_for_EuiccPackageSigned = function (el: _Element): EuiccPackageSigned {
    let eimId!: UTF8String;
    let eidValue!: Octet16;
    let counterValue!: INTEGER;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let euiccPackage!: EuiccPackage;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eidValue": (_el: _Element): void => { eidValue = $._decode_implicit<Octet16>(() => _decode_Octet16)(_el); },
        "counterValue": (_el: _Element): void => { counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "euiccPackage": (_el: _Element): void => { euiccPackage = _decode_EuiccPackage(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageSigned,
        _extension_additions_list_spec_for_EuiccPackageSigned,
        _root_component_type_list_2_spec_for_EuiccPackageSigned,
        undefined,
    );
    return new EuiccPackageSigned(
        eimId,
        eidValue,
        counterValue,
        eimTransactionId,
        euiccPackage
    );
}; }
    return _cached_decoder_for_EuiccPackageSigned(el);
}

let _cached_encoder_for_EuiccPackageSigned: $.ASN1Encoder<EuiccPackageSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageSigned (value: EuiccPackageSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageSigned) { _cached_encoder_for_EuiccPackageSigned = function (value: EuiccPackageSigned): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER)(value.eidValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.counterValue, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_EuiccPackage(value.euiccPackage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageSigned(value, elGetter);
}


/* eslint-enable */
