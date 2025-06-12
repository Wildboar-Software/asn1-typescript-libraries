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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ComponentClass, _decode_ComponentClass, _encode_ComponentClass } from "../PlatformCertificateProfile/ComponentClass.ta.mjs";
export { ComponentClass, _decode_ComponentClass, _encode_ComponentClass } from "../PlatformCertificateProfile/ComponentClass.ta.mjs";
import { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfile/PrivateEnterpriseNumber.ta.mjs";
export { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfile/PrivateEnterpriseNumber.ta.mjs";
import { ComponentAddress, _decode_ComponentAddress, _encode_ComponentAddress } from "../PlatformCertificateProfile/ComponentAddress.ta.mjs";
export { ComponentAddress, _decode_ComponentAddress, _encode_ComponentAddress } from "../PlatformCertificateProfile/ComponentAddress.ta.mjs";
import { CertificateIdentifier, _decode_CertificateIdentifier, _encode_CertificateIdentifier } from "../PlatformCertificateProfile/CertificateIdentifier.ta.mjs";
export { CertificateIdentifier, _decode_CertificateIdentifier, _encode_CertificateIdentifier } from "../PlatformCertificateProfile/CertificateIdentifier.ta.mjs";
import { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta.mjs";
export { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta.mjs";
import { AttributeStatus, _enum_for_AttributeStatus, AttributeStatus_added /* IMPORTED_LONG_ENUMERATION_ITEM */, added /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeStatus_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeStatus_removed /* IMPORTED_LONG_ENUMERATION_ITEM */, removed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeStatus, _encode_AttributeStatus } from "../PlatformCertificateProfile/AttributeStatus.ta.mjs";
export { AttributeStatus, _enum_for_AttributeStatus, AttributeStatus_added /* IMPORTED_LONG_ENUMERATION_ITEM */, added /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeStatus_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeStatus_removed /* IMPORTED_LONG_ENUMERATION_ITEM */, removed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeStatus, _encode_AttributeStatus } from "../PlatformCertificateProfile/AttributeStatus.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ComponentIdentifier */
/**
 * @summary ComponentIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentIdentifier ::= SEQUENCE {
 *     componentClass              ComponentClass,
 *     componentManufacturer       UTF8String (SIZE (1..strmax)),
 *     componentModel              UTF8String (SIZE (1..strmax)),
 *     componentSerial             [0] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     componentRevision           [1] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     componentManufacturerId     [2] IMPLICIT PrivateEnterpriseNumber OPTIONAL,
 *     fieldReplaceable            [3] IMPLICIT BOOLEAN OPTIONAL,
 *     componentAddresses          [4] IMPLICIT SEQUENCE (SIZE(1..MAX)) OF ComponentAddress OPTIONAL,
 *     componentPlatformCert       [5] IMPLICIT CertificateIdentifier OPTIONAL,
 *     componentPlatformCertUri    [6] IMPLICIT URIReference OPTIONAL,
 *     status                      [7] IMPLICIT AttributeStatus OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ComponentIdentifier {
    constructor (
        /**
         * @summary `componentClass`.
         * @public
         * @readonly
         */
        readonly componentClass: ComponentClass,
        /**
         * @summary `componentManufacturer`.
         * @public
         * @readonly
         */
        readonly componentManufacturer: UTF8String,
        /**
         * @summary `componentModel`.
         * @public
         * @readonly
         */
        readonly componentModel: UTF8String,
        /**
         * @summary `componentSerial`.
         * @public
         * @readonly
         */
        readonly componentSerial: OPTIONAL<UTF8String>,
        /**
         * @summary `componentRevision`.
         * @public
         * @readonly
         */
        readonly componentRevision: OPTIONAL<UTF8String>,
        /**
         * @summary `componentManufacturerId`.
         * @public
         * @readonly
         */
        readonly componentManufacturerId: OPTIONAL<PrivateEnterpriseNumber>,
        /**
         * @summary `fieldReplaceable`.
         * @public
         * @readonly
         */
        readonly fieldReplaceable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `componentAddresses`.
         * @public
         * @readonly
         */
        readonly componentAddresses: OPTIONAL<ComponentAddress[]>,
        /**
         * @summary `componentPlatformCert`.
         * @public
         * @readonly
         */
        readonly componentPlatformCert: OPTIONAL<CertificateIdentifier>,
        /**
         * @summary `componentPlatformCertUri`.
         * @public
         * @readonly
         */
        readonly componentPlatformCertUri: OPTIONAL<URIReference>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<AttributeStatus>
    ) {}

    /**
     * @summary Restructures an object into a ComponentIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentIdentifier`.
     * @returns {ComponentIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (ComponentIdentifier)]: (ComponentIdentifier)[_K] }): ComponentIdentifier {
        return new ComponentIdentifier(_o.componentClass, _o.componentManufacturer, _o.componentModel, _o.componentSerial, _o.componentRevision, _o.componentManufacturerId, _o.fieldReplaceable, _o.componentAddresses, _o.componentPlatformCert, _o.componentPlatformCertUri, _o.status);
    }

        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_AttributeStatus;
}
/* END_OF_SYMBOL_DEFINITION ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentIdentifier */
/**
 * @summary The Leading Root Component Types of ComponentIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("componentClass", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("componentManufacturer", false, $.hasTag(_TagClass.universal, 12), undefined, undefined),
    new $.ComponentSpec("componentModel", false, $.hasTag(_TagClass.universal, 12), undefined, undefined),
    new $.ComponentSpec("componentSerial", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("componentRevision", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("componentManufacturerId", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("fieldReplaceable", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("componentAddresses", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("componentPlatformCert", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("componentPlatformCertUri", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentIdentifier */
/**
 * @summary The Trailing Root Component Types of ComponentIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentIdentifier: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentIdentifier */
/**
 * @summary The Extension Addition Component Types of ComponentIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentIdentifier: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentIdentifier */
let _cached_decoder_for_ComponentIdentifier: $.ASN1Decoder<ComponentIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ComponentIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ComponentIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentIdentifier} The decoded data structure.
 */
export
function _decode_ComponentIdentifier (el: _Element) {
    if (!_cached_decoder_for_ComponentIdentifier) { _cached_decoder_for_ComponentIdentifier = function (el: _Element): ComponentIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let componentClass!: ComponentClass;
    let componentManufacturer!: UTF8String;
    let componentModel!: UTF8String;
    let componentSerial: OPTIONAL<UTF8String>;
    let componentRevision: OPTIONAL<UTF8String>;
    let componentManufacturerId: OPTIONAL<PrivateEnterpriseNumber>;
    let fieldReplaceable: OPTIONAL<BOOLEAN>;
    let componentAddresses: OPTIONAL<ComponentAddress[]>;
    let componentPlatformCert: OPTIONAL<CertificateIdentifier>;
    let componentPlatformCertUri: OPTIONAL<URIReference>;
    let status: OPTIONAL<AttributeStatus>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "componentClass": (_el: _Element): void => { componentClass = _decode_ComponentClass(_el); },
        "componentManufacturer": (_el: _Element): void => { componentManufacturer = $._decodeUTF8String(_el); },
        "componentModel": (_el: _Element): void => { componentModel = $._decodeUTF8String(_el); },
        "componentSerial": (_el: _Element): void => { componentSerial = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "componentRevision": (_el: _Element): void => { componentRevision = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "componentManufacturerId": (_el: _Element): void => { componentManufacturerId = $._decode_implicit<PrivateEnterpriseNumber>(() => _decode_PrivateEnterpriseNumber)(_el); },
        "fieldReplaceable": (_el: _Element): void => { fieldReplaceable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "componentAddresses": (_el: _Element): void => { componentAddresses = $._decode_implicit<ComponentAddress[]>(() => $._decodeSequenceOf<ComponentAddress>(() => _decode_ComponentAddress))(_el); },
        "componentPlatformCert": (_el: _Element): void => { componentPlatformCert = $._decode_implicit<CertificateIdentifier>(() => _decode_CertificateIdentifier)(_el); },
        "componentPlatformCertUri": (_el: _Element): void => { componentPlatformCertUri = $._decode_implicit<URIReference>(() => _decode_URIReference)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<AttributeStatus>(() => _decode_AttributeStatus)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ComponentIdentifier,
        _extension_additions_list_spec_for_ComponentIdentifier,
        _root_component_type_list_2_spec_for_ComponentIdentifier,
        undefined,
    );
    return new ComponentIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        componentClass,
        componentManufacturer,
        componentModel,
        componentSerial,
        componentRevision,
        componentManufacturerId,
        fieldReplaceable,
        componentAddresses,
        componentPlatformCert,
        componentPlatformCertUri,
        status
    );
}; }
    return _cached_decoder_for_ComponentIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentIdentifier */
let _cached_encoder_for_ComponentIdentifier: $.ASN1Encoder<ComponentIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ComponentIdentifier */
/**
 * @summary Encodes a(n) ComponentIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentIdentifier (value: ComponentIdentifier, elGetter: $.ASN1Encoder<ComponentIdentifier>) {
    if (!_cached_encoder_for_ComponentIdentifier) { _cached_encoder_for_ComponentIdentifier = function (value: ComponentIdentifier, elGetter: $.ASN1Encoder<ComponentIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ComponentClass(value.componentClass, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.componentManufacturer, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.componentModel, $.BER),
            /* IF_ABSENT  */ ((value.componentSerial === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.componentSerial, $.BER)),
            /* IF_ABSENT  */ ((value.componentRevision === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.componentRevision, $.BER)),
            /* IF_ABSENT  */ ((value.componentManufacturerId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PrivateEnterpriseNumber, $.BER)(value.componentManufacturerId, $.BER)),
            /* IF_ABSENT  */ ((value.fieldReplaceable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.fieldReplaceable, $.BER)),
            /* IF_ABSENT  */ ((value.componentAddresses === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ComponentAddress>(() => _encode_ComponentAddress, $.BER), $.BER)(value.componentAddresses, $.BER)),
            /* IF_ABSENT  */ ((value.componentPlatformCert === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CertificateIdentifier, $.BER)(value.componentPlatformCert, $.BER)),
            /* IF_ABSENT  */ ((value.componentPlatformCertUri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_URIReference, $.BER)(value.componentPlatformCertUri, $.BER)),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AttributeStatus, $.BER)(value.status, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ComponentIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComponentIdentifier */

/* eslint-enable */
