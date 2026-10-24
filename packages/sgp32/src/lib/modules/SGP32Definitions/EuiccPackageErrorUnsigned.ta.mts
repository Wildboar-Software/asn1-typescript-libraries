/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { EuiccPackageUnsignedErrorCode, _decode_EuiccPackageUnsignedErrorCode, _encode_EuiccPackageUnsignedErrorCode } from "../SGP32Definitions/EuiccPackageUnsignedErrorCode.ta.mjs";


/**
 * @summary EuiccPackageErrorUnsigned
 * @description
 * 
 * Unsigned error from ES10b.LoadEuiccPackage when the eimId is unknown or the
 * eIM signature is invalid (SGP.32 v1.2, section 5.9.1). The eUICC does not
 * store it (section 2.11.2.1). It always carries the eimId from the request.
 * associationToken is returned on the invalid-signature path when, and only
 * when, that eIM has a configured association token. eimTransactionId is
 * echoed when the request contained one (section 2.11.2.1).
 *
 * SGP.32 v1.2 section 2.11.2.1 and Annex C define this sequence with eimId,
 * eimTransactionId, and associationToken. They do not define
 * euiccPackageUnsignedErrorCode.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorUnsigned ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     associationToken [4] INTEGER OPTIONAL,
 *     euiccPackageUnsignedErrorCode [15] EuiccPackageUnsignedErrorCode OPTIONAL
 * 
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageErrorUnsigned {
    /**
     * @summary `eimId`.
     * @description
     * eimId taken from the request. Returned both when that eimId matches no
     * Associated eIM and when the signature check fails (SGP.32 v1.2, section
     * 5.9.1). Length 1 to 128 bytes (section 4.3).
     * @public
     * @readonly
     */
    public readonly eimId: UTF8String;
    /**
     * @summary `eimTransactionId`.
     * @description
     * Echoed when the signed package contained eimTransactionId (SGP.32 v1.2,
     * section 2.11.2.1). The identifier is as defined in SGP.22, which SGP.32
     * cites from section 2.11.1.1.
     * @public
     * @readonly
     */
    public readonly eimTransactionId?: OPTIONAL<TransactionId>;
    /**
     * @summary `associationToken`.
     * @description
     * Returned on an invalid signature when this eIM has an association token
     * configured (SGP.32 v1.2, section 5.9.1). When no token is configured, the
     * verifier uses the value zero and this component is absent. The unknown-eimId
     * error carries the eimId from the request.
     * @public
     * @readonly
     */
    public readonly associationToken?: OPTIONAL<INTEGER>;
    /**
     * @summary `euiccPackageUnsignedErrorCode`.
     * @description
     * SGP.32 v1.2 does not further define this component. Section 2.11.2.1 and
     * Annex C define EuiccPackageErrorUnsigned as eimId, eimTransactionId, and
     * associationToken.
     * @public
     * @readonly
     */
    public readonly euiccPackageUnsignedErrorCode?: OPTIONAL<EuiccPackageUnsignedErrorCode>;

    constructor (
        eimId: UTF8String,
        eimTransactionId?: OPTIONAL<TransactionId>,
        associationToken?: OPTIONAL<INTEGER>,
        euiccPackageUnsignedErrorCode?: OPTIONAL<EuiccPackageUnsignedErrorCode>
    ) {
        this.eimId = eimId;
        this.eimTransactionId = eimTransactionId;
        this.associationToken = associationToken;
        this.euiccPackageUnsignedErrorCode = euiccPackageUnsignedErrorCode;
        if (this.eimId.length < 1 || this.eimId.length > 128) {
            throw new ASN1SizeError("EuiccPackageErrorUnsigned.eimId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EuiccPackageErrorUnsigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageErrorUnsigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageErrorUnsigned`.
     * @returns {EuiccPackageErrorUnsigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageErrorUnsigned)]: (EuiccPackageErrorUnsigned)[_K] }): EuiccPackageErrorUnsigned {
        return new EuiccPackageErrorUnsigned(_o.eimId, _o.eimTransactionId, _o.associationToken, _o.euiccPackageUnsignedErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("associationToken", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("euiccPackageUnsignedErrorCode", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageErrorUnsigned: $.ASN1Decoder<EuiccPackageErrorUnsigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorUnsigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorUnsigned (el: _Element): EuiccPackageErrorUnsigned {
    if (!_cached_decoder_for_EuiccPackageErrorUnsigned) { _cached_decoder_for_EuiccPackageErrorUnsigned = function (el: _Element): EuiccPackageErrorUnsigned {
    let eimId!: UTF8String;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let associationToken: OPTIONAL<INTEGER>;
    let euiccPackageUnsignedErrorCode: OPTIONAL<EuiccPackageUnsignedErrorCode>;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "associationToken": (_el: _Element): void => { associationToken = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "euiccPackageUnsignedErrorCode": (_el: _Element): void => { euiccPackageUnsignedErrorCode = $._decode_implicit<EuiccPackageUnsignedErrorCode>(() => _decode_EuiccPackageUnsignedErrorCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageErrorUnsigned,
        _extension_additions_list_spec_for_EuiccPackageErrorUnsigned,
        _root_component_type_list_2_spec_for_EuiccPackageErrorUnsigned,
        undefined,
    );
    return new EuiccPackageErrorUnsigned(
        eimId,
        eimTransactionId,
        associationToken,
        euiccPackageUnsignedErrorCode
    );
}; }
    return _cached_decoder_for_EuiccPackageErrorUnsigned(el);
}

let _cached_encoder_for_EuiccPackageErrorUnsigned: $.ASN1Encoder<EuiccPackageErrorUnsigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorUnsigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorUnsigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorUnsigned (value: EuiccPackageErrorUnsigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorUnsigned) { _cached_encoder_for_EuiccPackageErrorUnsigned = function (value: EuiccPackageErrorUnsigned): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* IF_ABSENT  */ ((value.associationToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.associationToken, $.BER)),
            /* IF_ABSENT  */ ((value.euiccPackageUnsignedErrorCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_EuiccPackageUnsignedErrorCode, $.BER)(value.euiccPackageUnsignedErrorCode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageErrorUnsigned(value, elGetter);
}


/* eslint-enable */
