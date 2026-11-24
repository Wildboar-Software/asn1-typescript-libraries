/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertSubtypeRequiresType } from "../../constraints.mjs";
import { type BiometricSubtype, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { type BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { type BIRIndex, _decode_BIRIndex, _encode_BIRIndex } from "../CBEFF-DATA-ELEMENTS/BIRIndex.ta.mjs";
import { type Creator, _decode_Creator, _encode_Creator } from "../CBEFF-DATA-ELEMENTS/Creator.ta.mjs";
import { type BCDDatePeriod, _decode_BCDDatePeriod, _encode_BCDDatePeriod } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BCDDatePeriod.ta.mjs";
import { type BCDTime, _decode_BCDTime, _encode_BCDTime } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BCDTime.ta.mjs";
import { type FormatOwner, _decode_FormatOwner, _encode_FormatOwner } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/FormatOwner.ta.mjs";
import { type FormatType, _decode_FormatType, _encode_FormatType } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/FormatType.ta.mjs";
import { type PatronHeaderVersion, _decode_PatronHeaderVersion, _encode_PatronHeaderVersion } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/PatronHeaderVersion.ta.mjs";
import { type ProductID, _decode_ProductID, _encode_ProductID } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/ProductID.ta.mjs";

/**
 * @summary BiometricHeaderTemplateExplicit_biometricInformationDO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricHeaderTemplateExplicit-biometricInformationDO ::= SET {
 *     patronHeaderVersion      [0]  PatronHeaderVersion DEFAULT '0100'H,
 *     bdbBiometricType         [1]  BiometricType OPTIONAL,
 *     bdbBiometricSubType      [2]  BiometricSubtype OPTIONAL,
 *     -- Required to be absent unless bdbBiometricType is present
 *     bdbCreationDate          [3]  BCDTime OPTIONAL,
 *     -- CBEFF_BDB_creation_date
 *     birCreator               [4]  Creator OPTIONAL,
 *     bdbValidityPeriod        [5]  BCDDatePeriod OPTIONAL,
 *     bdbPID                   [6]  ProductID OPTIONAL,
 *     bdbFormatOwner           [7]  FormatOwner,
 *     bdbFormatType            [8]  FormatType,
 *     birIndex                 [16] BIRIndex OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BiometricHeaderTemplateExplicit_biometricInformationDO {
    /**
     * @summary `patronHeaderVersion`.
     * @public
     * @readonly
     */
    readonly patronHeaderVersion: OPTIONAL<PatronHeaderVersion>;
    /**
     * @summary `bdbBiometricType`.
     * @public
     * @readonly
     */
    readonly bdbBiometricType: OPTIONAL<BiometricType>;
    /**
     * @summary `bdbBiometricSubType`.
     * @public
     * @readonly
     */
    readonly bdbBiometricSubType: OPTIONAL<BiometricSubtype>;
    /**
     * @summary `bdbCreationDate`.
     * @public
     * @readonly
     */
    readonly bdbCreationDate: OPTIONAL<BCDTime>;
    /**
     * @summary `birCreator`.
     * @public
     * @readonly
     */
    readonly birCreator: OPTIONAL<Creator>;
    /**
     * @summary `bdbValidityPeriod`.
     * @public
     * @readonly
     */
    readonly bdbValidityPeriod: OPTIONAL<BCDDatePeriod>;
    /**
     * @summary `bdbPID`.
     * @public
     * @readonly
     */
    readonly bdbPID: OPTIONAL<ProductID>;
    /**
     * @summary `bdbFormatOwner`.
     * @public
     * @readonly
     */
    readonly bdbFormatOwner: FormatOwner;
    /**
     * @summary `bdbFormatType`.
     * @public
     * @readonly
     */
    readonly bdbFormatType: FormatType;
    /**
     * @summary `birIndex`.
     * @public
     * @readonly
     */
    readonly birIndex: OPTIONAL<BIRIndex>;

    constructor (
        patronHeaderVersion: OPTIONAL<PatronHeaderVersion>,
        bdbBiometricType: OPTIONAL<BiometricType>,
        bdbBiometricSubType: OPTIONAL<BiometricSubtype>,
        bdbCreationDate: OPTIONAL<BCDTime>,
        birCreator: OPTIONAL<Creator>,
        bdbValidityPeriod: OPTIONAL<BCDDatePeriod>,
        bdbPID: OPTIONAL<ProductID>,
        bdbFormatOwner: FormatOwner,
        bdbFormatType: FormatType,
        birIndex?: OPTIONAL<BIRIndex>
    ) {
        assertSubtypeRequiresType(bdbBiometricType !== undefined, bdbBiometricSubType !== undefined, "BiometricHeaderTemplateExplicit.biometricInformationDO");
        this.patronHeaderVersion = patronHeaderVersion;
        this.bdbBiometricType = bdbBiometricType;
        this.bdbBiometricSubType = bdbBiometricSubType;
        this.bdbCreationDate = bdbCreationDate;
        this.birCreator = birCreator;
        this.bdbValidityPeriod = bdbValidityPeriod;
        this.bdbPID = bdbPID;
        this.bdbFormatOwner = bdbFormatOwner;
        this.bdbFormatType = bdbFormatType;
        this.birIndex = birIndex;
    }

    /**
     * @summary Restructures an object into a BiometricHeaderTemplateExplicit_biometricInformationDO
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricHeaderTemplateExplicit_biometricInformationDO`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricHeaderTemplateExplicit_biometricInformationDO`.
     * @returns {BiometricHeaderTemplateExplicit_biometricInformationDO}
     */
    public static _from_object (_o: { [_K in keyof (BiometricHeaderTemplateExplicit_biometricInformationDO)]: (BiometricHeaderTemplateExplicit_biometricInformationDO)[_K] }): BiometricHeaderTemplateExplicit_biometricInformationDO {
        return new BiometricHeaderTemplateExplicit_biometricInformationDO(_o.patronHeaderVersion, _o.bdbBiometricType, _o.bdbBiometricSubType, _o.bdbCreationDate, _o.birCreator, _o.bdbValidityPeriod, _o.bdbPID, _o.bdbFormatOwner, _o.bdbFormatType, _o.birIndex);
    }

    /**
     * @summary Getter that returns the default value for `patronHeaderVersion`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_patronHeaderVersion () { return new Uint8Array([ 0x01, 0x00 ]); }
}

/**
 * @summary The Leading Root Component Types of BiometricHeaderTemplateExplicit_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO: $.ComponentSpec[] = [
    new $.ComponentSpec("patronHeaderVersion", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdbBiometricType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbBiometricSubType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbCreationDate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbValidityPeriod", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbPID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbFormatOwner", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbFormatType", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of BiometricHeaderTemplateExplicit_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricHeaderTemplateExplicit_biometricInformationDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO: $.ASN1Decoder<BiometricHeaderTemplateExplicit_biometricInformationDO> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricHeaderTemplateExplicit_biometricInformationDO
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricHeaderTemplateExplicit_biometricInformationDO (el: _Element): BiometricHeaderTemplateExplicit_biometricInformationDO {
    if (!_cached_decoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO) { _cached_decoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO = function (el: _Element): BiometricHeaderTemplateExplicit_biometricInformationDO {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let patronHeaderVersion: OPTIONAL<PatronHeaderVersion> = BiometricHeaderTemplateExplicit_biometricInformationDO._default_value_for_patronHeaderVersion;
    let bdbBiometricType: OPTIONAL<BiometricType>;
    let bdbBiometricSubType: OPTIONAL<BiometricSubtype>;
    let bdbCreationDate: OPTIONAL<BCDTime>;
    let birCreator: OPTIONAL<Creator>;
    let bdbValidityPeriod: OPTIONAL<BCDDatePeriod>;
    let bdbPID: OPTIONAL<ProductID>;
    let bdbFormatOwner!: FormatOwner;
    let bdbFormatType!: FormatType;
    let birIndex: OPTIONAL<BIRIndex>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decode_implicit<PatronHeaderVersion>(() => _decode_PatronHeaderVersion)(_el); },
        "bdbBiometricType": (_el: _Element): void => { bdbBiometricType = $._decode_implicit<BiometricType>(() => _decode_BiometricType)(_el); },
        "bdbBiometricSubType": (_el: _Element): void => { bdbBiometricSubType = $._decode_implicit<BiometricSubtype>(() => _decode_BiometricSubtype)(_el); },
        "bdbCreationDate": (_el: _Element): void => { bdbCreationDate = $._decode_implicit<BCDTime>(() => _decode_BCDTime)(_el); },
        "birCreator": (_el: _Element): void => { birCreator = $._decode_implicit<Creator>(() => _decode_Creator)(_el); },
        "bdbValidityPeriod": (_el: _Element): void => { bdbValidityPeriod = $._decode_implicit<BCDDatePeriod>(() => _decode_BCDDatePeriod)(_el); },
        "bdbPID": (_el: _Element): void => { bdbPID = $._decode_implicit<ProductID>(() => _decode_ProductID)(_el); },
        "bdbFormatOwner": (_el: _Element): void => { bdbFormatOwner = $._decode_implicit<FormatOwner>(() => _decode_FormatOwner)(_el); },
        "bdbFormatType": (_el: _Element): void => { bdbFormatType = $._decode_implicit<FormatType>(() => _decode_FormatType)(_el); },
        "birIndex": (_el: _Element): void => { birIndex = $._decode_implicit<BIRIndex>(() => _decode_BIRIndex)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO,
        _extension_additions_list_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO,
        _root_component_type_list_2_spec_for_BiometricHeaderTemplateExplicit_biometricInformationDO,
        undefined,
    );
    return new BiometricHeaderTemplateExplicit_biometricInformationDO( /* SET_CONSTRUCTOR_CALL */
        patronHeaderVersion,
        bdbBiometricType,
        bdbBiometricSubType,
        bdbCreationDate,
        birCreator,
        bdbValidityPeriod,
        bdbPID,
        bdbFormatOwner,
        bdbFormatType,
        birIndex
    );
}; }
    return _cached_decoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO(el);
}

let _cached_encoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO: $.ASN1Encoder<BiometricHeaderTemplateExplicit_biometricInformationDO> | null = null;

/**
 * @summary Encodes a(n) BiometricHeaderTemplateExplicit_biometricInformationDO into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricHeaderTemplateExplicit_biometricInformationDO, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricHeaderTemplateExplicit_biometricInformationDO (value: BiometricHeaderTemplateExplicit_biometricInformationDO, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO) { _cached_encoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO = function (value: BiometricHeaderTemplateExplicit_biometricInformationDO, elGetter: $.ASN1Encoder<BiometricHeaderTemplateExplicit_biometricInformationDO>): _Element {
    const _components: _Element[] = [];
    if (value.patronHeaderVersion !== undefined && !$.deepEq(value.patronHeaderVersion, BiometricHeaderTemplateExplicit_biometricInformationDO._default_value_for_patronHeaderVersion)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_PatronHeaderVersion, $.BER)(value.patronHeaderVersion, $.BER));
    }
    if (value.bdbBiometricType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricType, $.BER)(value.bdbBiometricType, $.BER));
    }
    if (value.bdbBiometricSubType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_BiometricSubtype, $.BER)(value.bdbBiometricSubType, $.BER));
    }
    if (value.bdbCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_BCDTime, $.BER)(value.bdbCreationDate, $.BER));
    }
    if (value.birCreator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Creator, $.BER)(value.birCreator, $.BER));
    }
    if (value.bdbValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_BCDDatePeriod, $.BER)(value.bdbValidityPeriod, $.BER));
    }
    if (value.bdbPID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ProductID, $.BER)(value.bdbPID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_FormatOwner, $.BER)(value.bdbFormatOwner, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FormatType, $.BER)(value.bdbFormatType, $.BER));
    if (value.birIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_BIRIndex, $.BER)(value.birIndex, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_BiometricHeaderTemplateExplicit_biometricInformationDO(value, elGetter);
}

/* eslint-enable */
