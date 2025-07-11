/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
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
import { PatronHeaderVersion, _decode_PatronHeaderVersion, _encode_PatronHeaderVersion } from "../CBEFF-SMARTCARD-BIDO/PatronHeaderVersion.ta.mjs";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-SMARTCARD-BIDO/BiometricType.ta.mjs";
import { BiometricSubType, _decode_BiometricSubType, _encode_BiometricSubType } from "../CBEFF-SMARTCARD-BIDO/BiometricSubType.ta.mjs";
import { BCDTime, _decode_BCDTime, _encode_BCDTime } from "../CBEFF-SMARTCARD-BIDO/BCDTime.ta.mjs";
import { Creator, _decode_Creator, _encode_Creator } from "../CBEFF-SMARTCARD-BIDO/Creator.ta.mjs";
import { BCDDatePeriod, _decode_BCDDatePeriod, _encode_BCDDatePeriod } from "../CBEFF-SMARTCARD-BIDO/BCDDatePeriod.ta.mjs";
import { ProductID, _decode_ProductID, _encode_ProductID } from "../CBEFF-SMARTCARD-BIDO/ProductID.ta.mjs";
import { FormatOwner, _decode_FormatOwner, _encode_FormatOwner } from "../CBEFF-SMARTCARD-BIDO/FormatOwner.ta.mjs";
import { FormatType, _decode_FormatType, _encode_FormatType } from "../CBEFF-SMARTCARD-BIDO/FormatType.ta.mjs";
import { BIRIndex, _decode_BIRIndex, _encode_BIRIndex } from "../CBEFF-SMARTCARD-BIDO/BIRIndex.ta.mjs";
/**
 * @summary BiometricHeaderTemplate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricHeaderTemplate ::= SET {
 *   patronHeaderVersion    [0]  PatronHeaderVersion DEFAULT '0101'H,
 *   -- The absence of this Data Object represents NO VALUE AVAILABLE
 *   bdbBiometricType       [1]  BiometricType OPTIONAL,
 *   bdbBiometricSubType    [2]  BiometricSubType OPTIONAL,
 *   -- Required to be absent unless bdbBiometricType is present
 *   bdbCreationDate        [3]  BCDTime OPTIONAL,
 *   -- CBEFF_BDB_creation_date
 *   birCreator             [4]  Creator OPTIONAL,
 *   bdbValidityPeriod      [5]  BCDDatePeriod OPTIONAL,
 *   bdbPID                 [6]  ProductID OPTIONAL,
 *   bdbFormatOwner         [7]  FormatOwner,
 *   bdbFormatType          [8]  FormatType,
 *   birIndex               [16]  BIRIndex OPTIONAL,
 *   matchingAlgParameters  [17]  OCTET STRING OPTIONAL
 *   -- A non-CBEFF data element &#8211; see ISO/IEC 7816-11
 * }
 * ```
 *
 */
export
class BiometricHeaderTemplate {
    constructor (
        /**
         * @summary `patronHeaderVersion`.
         * @public
         * @readonly
         */
        readonly patronHeaderVersion: OPTIONAL<PatronHeaderVersion>,
        /**
         * @summary `bdbBiometricType`.
         * @public
         * @readonly
         */
        readonly bdbBiometricType: OPTIONAL<BiometricType>,
        /**
         * @summary `bdbBiometricSubType`.
         * @public
         * @readonly
         */
        readonly bdbBiometricSubType: OPTIONAL<BiometricSubType>,
        /**
         * @summary `bdbCreationDate`.
         * @public
         * @readonly
         */
        readonly bdbCreationDate: OPTIONAL<BCDTime>,
        /**
         * @summary `birCreator`.
         * @public
         * @readonly
         */
        readonly birCreator: OPTIONAL<Creator>,
        /**
         * @summary `bdbValidityPeriod`.
         * @public
         * @readonly
         */
        readonly bdbValidityPeriod: OPTIONAL<BCDDatePeriod>,
        /**
         * @summary `bdbPID`.
         * @public
         * @readonly
         */
        readonly bdbPID: OPTIONAL<ProductID>,
        /**
         * @summary `bdbFormatOwner`.
         * @public
         * @readonly
         */
        readonly bdbFormatOwner: FormatOwner,
        /**
         * @summary `bdbFormatType`.
         * @public
         * @readonly
         */
        readonly bdbFormatType: FormatType,
        /**
         * @summary `birIndex`.
         * @public
         * @readonly
         */
        readonly birIndex: OPTIONAL<BIRIndex>,
        /**
         * @summary `matchingAlgParameters`.
         * @public
         * @readonly
         */
        readonly matchingAlgParameters: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a BiometricHeaderTemplate
     * @description
     *
     * This takes an `object` and converts it to a `BiometricHeaderTemplate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricHeaderTemplate`.
     * @returns {BiometricHeaderTemplate}
     */
    public static _from_object (_o: { [_K in keyof (BiometricHeaderTemplate)]: (BiometricHeaderTemplate)[_K] }): BiometricHeaderTemplate {
        return new BiometricHeaderTemplate(_o.patronHeaderVersion, _o.bdbBiometricType, _o.bdbBiometricSubType, _o.bdbCreationDate, _o.birCreator, _o.bdbValidityPeriod, _o.bdbPID, _o.bdbFormatOwner, _o.bdbFormatType, _o.birIndex, _o.matchingAlgParameters);
    }

    /**
     * @summary Getter that returns the default value for `patronHeaderVersion`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_patronHeaderVersion (): PatronHeaderVersion { return new Uint8Array([ 0x01, 0x01 ]); }
}

/**
 * @summary The Leading Root Component Types of BiometricHeaderTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricHeaderTemplate: $.ComponentSpec[] = [
    new $.ComponentSpec("patronHeaderVersion", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdbBiometricType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbBiometricSubType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbCreationDate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbValidityPeriod", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbPID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbFormatOwner", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbFormatType", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("matchingAlgParameters", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of BiometricHeaderTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricHeaderTemplate: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of BiometricHeaderTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricHeaderTemplate: $.ComponentSpec[] = [

];

let _cached_decoder_for_BiometricHeaderTemplate: $.ASN1Decoder<BiometricHeaderTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricHeaderTemplate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricHeaderTemplate} The decoded data structure.
 */
export
function _decode_BiometricHeaderTemplate (el: _Element): BiometricHeaderTemplate {
    if (!_cached_decoder_for_BiometricHeaderTemplate) { _cached_decoder_for_BiometricHeaderTemplate = function (el: _Element): BiometricHeaderTemplate {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let patronHeaderVersion: OPTIONAL<PatronHeaderVersion> = BiometricHeaderTemplate._default_value_for_patronHeaderVersion;
    let bdbBiometricType: OPTIONAL<BiometricType>;
    let bdbBiometricSubType: OPTIONAL<BiometricSubType>;
    let bdbCreationDate: OPTIONAL<BCDTime>;
    let birCreator: OPTIONAL<Creator>;
    let bdbValidityPeriod: OPTIONAL<BCDDatePeriod>;
    let bdbPID: OPTIONAL<ProductID>;
    let bdbFormatOwner!: FormatOwner;
    let bdbFormatType!: FormatType;
    let birIndex: OPTIONAL<BIRIndex>;
    let matchingAlgParameters: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    const callbacks: $.DecodingMap = {
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decode_implicit<PatronHeaderVersion>(() => _decode_PatronHeaderVersion)(_el); },
        "bdbBiometricType": (_el: _Element): void => { bdbBiometricType = $._decode_implicit<BiometricType>(() => _decode_BiometricType)(_el); },
        "bdbBiometricSubType": (_el: _Element): void => { bdbBiometricSubType = $._decode_implicit<BiometricSubType>(() => _decode_BiometricSubType)(_el); },
        "bdbCreationDate": (_el: _Element): void => { bdbCreationDate = $._decode_implicit<BCDTime>(() => _decode_BCDTime)(_el); },
        "birCreator": (_el: _Element): void => { birCreator = $._decode_implicit<Creator>(() => _decode_Creator)(_el); },
        "bdbValidityPeriod": (_el: _Element): void => { bdbValidityPeriod = $._decode_implicit<BCDDatePeriod>(() => _decode_BCDDatePeriod)(_el); },
        "bdbPID": (_el: _Element): void => { bdbPID = $._decode_implicit<ProductID>(() => _decode_ProductID)(_el); },
        "bdbFormatOwner": (_el: _Element): void => { bdbFormatOwner = $._decode_implicit<FormatOwner>(() => _decode_FormatOwner)(_el); },
        "bdbFormatType": (_el: _Element): void => { bdbFormatType = $._decode_implicit<FormatType>(() => _decode_FormatType)(_el); },
        "birIndex": (_el: _Element): void => { birIndex = $._decode_implicit<BIRIndex>(() => _decode_BIRIndex)(_el); },
        "matchingAlgParameters": (_el: _Element): void => { matchingAlgParameters = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricHeaderTemplate,
        _extension_additions_list_spec_for_BiometricHeaderTemplate,
        _root_component_type_list_2_spec_for_BiometricHeaderTemplate,
        undefined,
    );
    return new BiometricHeaderTemplate( /* SET_CONSTRUCTOR_CALL */
        patronHeaderVersion,
        bdbBiometricType,
        bdbBiometricSubType,
        bdbCreationDate,
        birCreator,
        bdbValidityPeriod,
        bdbPID,
        bdbFormatOwner,
        bdbFormatType,
        birIndex,
        matchingAlgParameters
    );
}; }
    return _cached_decoder_for_BiometricHeaderTemplate(el);
}

let _cached_encoder_for_BiometricHeaderTemplate: $.ASN1Encoder<BiometricHeaderTemplate> | null = null;

/**
 * @summary Encodes a(n) BiometricHeaderTemplate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricHeaderTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricHeaderTemplate (value: BiometricHeaderTemplate, elGetter: $.ASN1Encoder<BiometricHeaderTemplate>): _Element {
    if (!_cached_encoder_for_BiometricHeaderTemplate) { _cached_encoder_for_BiometricHeaderTemplate = function (value: BiometricHeaderTemplate): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.patronHeaderVersion === undefined || $.deepEq(value.patronHeaderVersion, BiometricHeaderTemplate._default_value_for_patronHeaderVersion) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PatronHeaderVersion, $.BER)(value.patronHeaderVersion, $.BER)),
            /* IF_ABSENT  */ ((value.bdbBiometricType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricType, $.BER)(value.bdbBiometricType, $.BER)),
            /* IF_ABSENT  */ ((value.bdbBiometricSubType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BiometricSubType, $.BER)(value.bdbBiometricSubType, $.BER)),
            /* IF_ABSENT  */ ((value.bdbCreationDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BCDTime, $.BER)(value.bdbCreationDate, $.BER)),
            /* IF_ABSENT  */ ((value.birCreator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Creator, $.BER)(value.birCreator, $.BER)),
            /* IF_ABSENT  */ ((value.bdbValidityPeriod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_BCDDatePeriod, $.BER)(value.bdbValidityPeriod, $.BER)),
            /* IF_ABSENT  */ ((value.bdbPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ProductID, $.BER)(value.bdbPID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_FormatOwner, $.BER)(value.bdbFormatOwner, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FormatType, $.BER)(value.bdbFormatType, $.BER),
            /* IF_ABSENT  */ ((value.birIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_BIRIndex, $.BER)(value.birIndex, $.BER)),
            /* IF_ABSENT  */ ((value.matchingAlgParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.matchingAlgParameters, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricHeaderTemplate(value, elGetter);
}


/* eslint-enable */
