/* eslint-disable */
import {
    ASN1SizeError,
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { ComponentClass, _decode_ComponentClass, _encode_ComponentClass } from "../PlatformCertificateProfileV2/ComponentClass.ta.mjs";
import { type PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfileV2/PrivateEnterpriseNumber.ta.mjs";
import { ComponentAddress, _decode_ComponentAddress, _encode_ComponentAddress } from "../PlatformCertificateProfileV2/ComponentAddress.ta.mjs";
import { CertificateIdentifier, _decode_CertificateIdentifier, _encode_CertificateIdentifier } from "../PlatformCertificateProfileV2/CertificateIdentifier.ta.mjs";
import { URIReference, _decode_URIReference, _encode_URIReference } from "../EKCredentialProfileV2/URIReference.ta.mjs";
import { AttributeStatus, _decode_AttributeStatus, _encode_AttributeStatus, _enum_for_AttributeStatus } from "../PlatformCertificateProfileV2/AttributeStatus.ta.mjs";


/**
 * @summary ComponentIdentifierV11
 * @description
 *
 * Component identity in the shape used by version 1.1 of the platform
 * certificate profile. Carried by `componentIdentifierV11Trait`, which is then
 * the only trait in that `ComponentIdentifier`. The trait's category is
 * `tcg-tr-cat-componentIdentifierV11`. The profile requires `componentClass`,
 * `componentManufacturer`, and `componentSerial` to be populated when the trait
 * is used. `componentModel` is also a component of the sequence.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentIdentifierV11 ::= SEQUENCE {
 *     componentClass              ComponentClass,
 *     componentManufacturer       UTF8String (SIZE (1..strmax)),
 *     componentModel              UTF8String (SIZE (1..strmax)),
 *     componentSerial             [0] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     componentRevision           [1] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     componentManufacturerId     [2] IMPLICIT PrivateEnterpriseNumber OPTIONAL,
 *     fieldReplaceable            [3] IMPLICIT BOOLEAN OPTIONAL,
 *     componentAddresses          [4] IMPLICIT SEQUENCE (SIZE(1.. MAX)) OF ComponentAddress OPTIONAL,
 *     componentPlatformCert       [5] IMPLICIT CertificateIdentifier OPTIONAL,
 *     componentPlatformCertUri    [6] IMPLICIT URIReference OPTIONAL,
 *     status                      [7] IMPLICIT AttributeStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ComponentIdentifierV11 {
    /**
     * @summary `componentClass`.
     * @description
     *
     * Component type: a registry and the 4-byte value that registry assigns.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentClass: ComponentClass;
    /**
     * @summary `componentManufacturer`.
     * @description
     *
     * Component manufacturer, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentManufacturer: UTF8String;
    /**
     * @summary `componentModel`.
     * @description
     *
     * Component model, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentModel: UTF8String;
    /**
     * @summary `componentSerial`.
     * @description
     *
     * Component serial number, length 1..`strmax`. Populated when this value is
     * used as `componentIdentifierV11Trait`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentSerial: OPTIONAL<UTF8String>;
    /**
     * @summary `componentRevision`.
     * @description
     *
     * Optional component revision, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentRevision: OPTIONAL<UTF8String>;
    /**
     * @summary `componentManufacturerId`.
     * @description
     *
     * Optional IANA Private Enterprise Number of the component manufacturer.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentManufacturerId: OPTIONAL<PrivateEnterpriseNumber>;
    /**
     * @summary `fieldReplaceable`.
     * @description
     *
     * Optional indication of whether the component is field replaceable.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly fieldReplaceable: OPTIONAL<BOOLEAN>;
    /**
     * @summary `componentAddresses`.
     * @description
     *
     * Optional addresses of the component, for example MAC addresses.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentAddresses: OPTIONAL<ComponentAddress[]>;
    /**
     * @summary `componentPlatformCert`.
     * @description
     *
     * Optional reference to a certificate for the component.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentPlatformCert: OPTIONAL<CertificateIdentifier>;
    /**
     * @summary `componentPlatformCertUri`.
     * @description
     *
     * Optional URI reference for the component's platform certificate. A hash,
     * when present, is paired with its algorithm.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly componentPlatformCertUri: OPTIONAL<URIReference>;
    /**
     * @summary `status`.
     * @description
     *
     * Optional added, modified, or removed status relative to the previous
     * certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<AttributeStatus>;

    constructor (
        componentClass: ComponentClass,
        componentManufacturer: UTF8String,
        componentModel: UTF8String,
        componentSerial?: OPTIONAL<UTF8String>,
        componentRevision?: OPTIONAL<UTF8String>,
        componentManufacturerId?: OPTIONAL<PrivateEnterpriseNumber>,
        fieldReplaceable?: OPTIONAL<BOOLEAN>,
        componentAddresses?: OPTIONAL<ComponentAddress[]>,
        componentPlatformCert?: OPTIONAL<CertificateIdentifier>,
        componentPlatformCertUri?: OPTIONAL<URIReference>,
        status?: OPTIONAL<AttributeStatus>
    ) {
        this.componentClass = componentClass;
        this.componentManufacturer = componentManufacturer;
        this.componentModel = componentModel;
        this.componentSerial = componentSerial;
        this.componentRevision = componentRevision;
        this.componentManufacturerId = componentManufacturerId;
        this.fieldReplaceable = fieldReplaceable;
        this.componentAddresses = componentAddresses;
        this.componentPlatformCert = componentPlatformCert;
        this.componentPlatformCertUri = componentPlatformCertUri;
        this.status = status;
        if (componentManufacturer.length < 1 || componentManufacturer.length > strmax) {
            throw new ASN1SizeError("ComponentIdentifierV11.componentManufacturer violates SIZE (1..strmax)");
        }
        if (componentModel.length < 1 || componentModel.length > strmax) {
            throw new ASN1SizeError("ComponentIdentifierV11.componentModel violates SIZE (1..strmax)");
        }
        if (componentSerial !== undefined && (componentSerial.length < 1 || componentSerial.length > strmax)) {
            throw new ASN1SizeError("ComponentIdentifierV11.componentSerial violates SIZE (1..strmax)");
        }
        if (componentRevision !== undefined && (componentRevision.length < 1 || componentRevision.length > strmax)) {
            throw new ASN1SizeError("ComponentIdentifierV11.componentRevision violates SIZE (1..strmax)");
        }
        if (componentAddresses !== undefined && componentAddresses.length < 1) {
            throw new ASN1SizeError("ComponentIdentifierV11.componentAddresses violates SIZE (1..MAX)");
        }
    }

    /**
     * @summary Restructures an object into a ComponentIdentifierV11
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentIdentifierV11`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentIdentifierV11`.
     * @returns {ComponentIdentifierV11}
     */
    public static _from_object (_o: { [_K in keyof (ComponentIdentifierV11)]: (ComponentIdentifierV11)[_K] }): ComponentIdentifierV11 {
        return new ComponentIdentifierV11(_o.componentClass, _o.componentManufacturer, _o.componentModel, _o.componentSerial, _o.componentRevision, _o.componentManufacturerId, _o.fieldReplaceable, _o.componentAddresses, _o.componentPlatformCert, _o.componentPlatformCertUri, _o.status);
    }

        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_AttributeStatus;
}

/**
 * @summary The Leading Root Component Types of ComponentIdentifierV11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentIdentifierV11: $.ComponentSpec[] = [
    new $.ComponentSpec("componentClass", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("componentManufacturer", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("componentModel", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("componentSerial", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("componentRevision", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("componentManufacturerId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fieldReplaceable", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("componentAddresses", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("componentPlatformCert", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("componentPlatformCertUri", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of ComponentIdentifierV11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentIdentifierV11: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ComponentIdentifierV11
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentIdentifierV11: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ComponentIdentifierV11: $.ASN1Decoder<ComponentIdentifierV11> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentIdentifierV11
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComponentIdentifierV11 (el: _Element): ComponentIdentifierV11 {
    if (!_cached_decoder_for_ComponentIdentifierV11) { _cached_decoder_for_ComponentIdentifierV11 = function (el: _Element): ComponentIdentifierV11 {
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
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ComponentIdentifierV11,
        _extension_additions_list_spec_for_ComponentIdentifierV11,
        _root_component_type_list_2_spec_for_ComponentIdentifierV11,
        undefined,
    );
    return new ComponentIdentifierV11(
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
    return _cached_decoder_for_ComponentIdentifierV11(el);
}

let _cached_encoder_for_ComponentIdentifierV11: $.ASN1Encoder<ComponentIdentifierV11> | null = null;

/**
 * @summary Encodes a(n) ComponentIdentifierV11 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentIdentifierV11, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentIdentifierV11 (value: ComponentIdentifierV11, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComponentIdentifierV11) { _cached_encoder_for_ComponentIdentifierV11 = function (value: ComponentIdentifierV11): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ComponentClass(value.componentClass, $.BER));
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.componentManufacturer, $.BER));
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.componentModel, $.BER));
    if (value.componentSerial !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.componentSerial, $.BER));
    }
    if (value.componentRevision !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.componentRevision, $.BER));
    }
    if (value.componentManufacturerId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_PrivateEnterpriseNumber, $.BER)(value.componentManufacturerId, $.BER));
    }
    if (value.fieldReplaceable !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.fieldReplaceable, $.BER));
    }
    if (value.componentAddresses !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ComponentAddress>(() => _encode_ComponentAddress, $.BER), $.BER)(value.componentAddresses, $.BER));
    }
    if (value.componentPlatformCert !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CertificateIdentifier, $.BER)(value.componentPlatformCert, $.BER));
    }
    if (value.componentPlatformCertUri !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_URIReference, $.BER)(value.componentPlatformCertUri, $.BER));
    }
    if (value.status !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_AttributeStatus, $.BER)(value.status, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ComponentIdentifierV11(value, elGetter);
}


/* eslint-enable */
