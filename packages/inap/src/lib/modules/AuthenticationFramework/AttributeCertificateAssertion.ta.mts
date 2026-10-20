/* eslint-disable */
import {
    GeneralizedTime,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeCertificateAssertion_subject, _decode_AttributeCertificateAssertion_subject, _encode_AttributeCertificateAssertion_subject } from "../AuthenticationFramework/AttributeCertificateAssertion-subject.ta.mjs";
// export { AttributeCertificateAssertion_subject, _decode_AttributeCertificateAssertion_subject, _encode_AttributeCertificateAssertion_subject } from "../AuthenticationFramework/AttributeCertificateAssertion-subject.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";


/**
 * @summary AttributeCertificateAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateAssertion ::= SEQUENCE {
 *   subject
 *     [0]  CHOICE {baseCertificateID  [0]  IssuerSerial,
 *                  subjectName        [1]  Name} OPTIONAL,
 *   issuer           [1]  Name OPTIONAL,
 *   attCertValidity  [2]  GeneralizedTime OPTIONAL,
 *   attType          [3]  SET OF AttributeType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeCertificateAssertion {
    /**
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<AttributeCertificateAssertion_subject>;
    /**
     * @summary `issuer`.
     * @public
     * @readonly
     */
    readonly issuer: OPTIONAL<Name>;
    /**
     * @summary `attCertValidity`.
     * @public
     * @readonly
     */
    readonly attCertValidity: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `attType`.
     * @public
     * @readonly
     */
    readonly attType: OPTIONAL<AttributeType[]>;

    constructor (
        subject: OPTIONAL<AttributeCertificateAssertion_subject>,
        issuer: OPTIONAL<Name>,
        attCertValidity: OPTIONAL<GeneralizedTime>,
        attType: OPTIONAL<AttributeType[]>
    ) {
        this.subject = subject;
        this.issuer = issuer;
        this.attCertValidity = attCertValidity;
        this.attType = attType;
    }

    /**
     * @summary Restructures an object into a AttributeCertificateAssertion
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeCertificateAssertion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateAssertion`.
     * @returns {AttributeCertificateAssertion}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCertificateAssertion)]: (AttributeCertificateAssertion)[_K] }): AttributeCertificateAssertion {
        return new AttributeCertificateAssertion(_o.subject, _o.issuer, _o.attCertValidity, _o.attType);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attCertValidity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attType", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeCertificateAssertion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeCertificateAssertion: $.ASN1Decoder<AttributeCertificateAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeCertificateAssertion (el: _Element): AttributeCertificateAssertion {
    if (!_cached_decoder_for_AttributeCertificateAssertion) { _cached_decoder_for_AttributeCertificateAssertion = function (el: _Element): AttributeCertificateAssertion {
    let subject: OPTIONAL<AttributeCertificateAssertion_subject>;
    let issuer: OPTIONAL<Name>;
    let attCertValidity: OPTIONAL<GeneralizedTime>;
    let attType: OPTIONAL<AttributeType[]>;
    const callbacks: $.DecodingMap = {
        "subject": (_el: _Element): void => { subject = $._decode_explicit<AttributeCertificateAssertion_subject>(() => _decode_AttributeCertificateAssertion_subject)(_el); },
        "issuer": (_el: _Element): void => { issuer = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "attCertValidity": (_el: _Element): void => { attCertValidity = $._decode_explicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "attType": (_el: _Element): void => { attType = $._decode_explicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateAssertion,
        _extension_additions_list_spec_for_AttributeCertificateAssertion,
        _root_component_type_list_2_spec_for_AttributeCertificateAssertion,
        undefined,
    );
    return new AttributeCertificateAssertion(
        subject,
        issuer,
        attCertValidity,
        attType
    );
}; }
    return _cached_decoder_for_AttributeCertificateAssertion(el);
}

let _cached_encoder_for_AttributeCertificateAssertion: $.ASN1Encoder<AttributeCertificateAssertion> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateAssertion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateAssertion (value: AttributeCertificateAssertion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeCertificateAssertion) { _cached_encoder_for_AttributeCertificateAssertion = function (value: AttributeCertificateAssertion, elGetter: $.ASN1Encoder<AttributeCertificateAssertion>): _Element {
    const _components: _Element[] = [];
    if (value.subject !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_AttributeCertificateAssertion_subject, $.BER)(value.subject, $.BER));
    }
    if (value.issuer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER)(value.issuer, $.BER));
    }
    if (value.attCertValidity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.attCertValidity, $.BER));
    }
    if (value.attType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeCertificateAssertion(value, elGetter);
}


/* eslint-enable */
